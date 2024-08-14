"use client"

import { useState } from "react"
import Link from "next/link"
import { Announcement } from "@/data/temp_data"
import {
  FaDiscord,
  FaFileContract,
  FaRobot,
  FaStoreAlt,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa"
import {
  MdOutlineEmojiEvents,
  MdOutlineRampRight,
  MdSwapHoriz,
} from "react-icons/md"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
  const [show, setShow] = useState(true)

  return (
    <div className="relative mt-1 px-0 ">
      {show ? (
        <div className="fixed inset-x-0 top-16 p-4">
          <div className="flex items-center justify-between gap-4 rounded-lg bg-indigo-600 px-4 py-3 text-white">
            <p className="text-sm font-medium">{Announcement}</p>

            <button
              aria-label="Dismiss"
              className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
              onClick={() => setShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <section
        /* eslint-disable-next-line tailwindcss/no-contradicting-classname */
        className="bg-gray-900 bg-[url(../public/images/front/hero-bg.png)] bg-cover bg-center bg-no-repeat text-white"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-blue-300 via-red-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              iGate Crypto Solutions
              <span className="sm:block">Your gateway to crypto</span>
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className={buttonVariants({ variant: "blue" })}
              >
                <FaTelegram className="mr-2 size-4" />
                Telegram
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className={buttonVariants({ variant: "secondary" })}
              >
                <FaTwitter className="mr-2 size-4" />
                Twitter
              </Link>
              <Link
                href={siteConfig.links.discord}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants(),
                  "bg-[#7289da] text-white hover:bg-[#7289da]/80"
                )}
              >
                <FaDiscord className="mr-2 size-4" />
                Discord
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container relative mt-20">
        <section>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Bridging Crypto For Everyone
                </h2>

                <p className="mt-4 text-gray-600">
                  iGate Crypto Solutions is a platform that bridges the gap
                  between traditional finance and crypto. We provide a suite of
                  tools and services that make it easy for anyone to access and
                  use crypto.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className={"items-center"}>
                    <MdSwapHoriz size={48} />
                  </span>

                  <h2 className="mt-2 font-bold">Multi-Swaps</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Choose from a wide range of swaps to bridge your assets.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <MdOutlineRampRight size={48} />

                  <h2 className="mt-2 font-bold">On/Off Ramps</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Get your assets on and off the blockchain with ease.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <FaFileContract size={48} />

                  <h2 className="mt-2 font-bold">Contracts</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Launch and interact with smart contracts on multiple chains.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <FaRobot size={48} />

                  <h2 className="mt-2 font-bold">Bots</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    AI Bots and Tools to help you navigate the crypto world.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <FaStoreAlt size={48} />

                  <h2 className="mt-2 font-bold">NFT Marketplace</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Connect with artists and creators to buy and sell NFTs.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <MdOutlineEmojiEvents size={48} />

                  <h2 className="mt-2 font-bold">Events</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Join our events and learn from industry experts.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
