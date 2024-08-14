import { env } from "@/env.mjs"
import { getIronSession } from "iron-session"
import { SiweMessage } from "siwe"
import { z } from "zod"

import { prisma } from "@/lib/prisma"
import { SERVER_SESSION_SETTINGS } from "@/lib/session"

const verifySchema = z.object({
  signature: z.string(),
  message: z.object({
    domain: z.string(),
    address: z.string(),
    statement: z.string(),
    uri: z.string(),
    version: z.string(),
    chainId: z.number(),
    nonce: z.string(),
    issuedAt: z.string(),
  }),
})

export async function POST(req: Request) {
  try {
    const res = new Response(JSON.stringify({ ok: true }))
    const session = await getIronSession(req, res, SERVER_SESSION_SETTINGS)
    const { message, signature } = verifySchema.parse(await req.json())
    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.validate(signature)
    if (fields.nonce !== session.nonce)
      return new Response(JSON.stringify({ message: "Invalid nonce." }), {
        status: 422,
      })
    session.siwe = fields

    if (env.DB_URL) {
      await prisma.user.upsert({
        where: { id: fields.address },
        update: {
          address: fields.address,
        },
        create: {
          id: fields.address,
          address: fields.address,
          profile: {
            create: {
              username: fields.address.slice(0, 10),
              email: fields.address + "@igate.network",
              role: "User",
            },
          },
          wallet: {
            create: {
              balance: 0.0,
            },
          },
        },
      })

      const user = await prisma.user.findUnique({
        where: { id: fields.address },
      })

      const profile = user?.userProfileId
        ? await prisma.userProfile.findUnique({
            where: { id: user.userProfileId },
          })
        : null

      const wallet = user?.userWalletId
        ? await prisma.userWallet.findUnique({
            where: { id: user.userWalletId },
          })
        : null

      if (user) {
        if (profile) {
          session.user = {
            id: user.id,
            address: user.address,
            profileId: user.userProfileId,
            username: profile.username,
            email: profile.email,
            role: profile.role,
            image: profile.image,
            balance: wallet?.balance as number,
          }
        }
      } else {
        session.user = {
          id: "null",
          address: "null",
          profileId: "null",
          username: "null",
          email: "null",
          role: "null",
          image: "null",
          balance: 0.0,
        }
      }
    } else {
      return new Response(JSON.stringify({ ok: false }))
    }

    await session.save()

    return res
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e)
    console.error(errorMessage)
    return new Response(JSON.stringify({ ok: false }))
  }
}
