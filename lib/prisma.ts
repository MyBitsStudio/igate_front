import { PrismaClient } from "@prisma/client"

const // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    prisma = new PrismaClient()


// eslint-disable-next-line @typescript-eslint/no-unsafe-call
void prisma.$connect()

export { prisma }
