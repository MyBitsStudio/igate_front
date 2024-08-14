import { BsBank2 } from "react-icons/bs"
import { GrHostMaintenance } from "react-icons/gr"
import { IoApps, IoDocumentsSharp } from "react-icons/io5"
import { SiGamedeveloper, SiRobotframework } from "react-icons/si"

import { Separator } from "@/components/ui/separator"

function BusinessPage() {
  return (
    <div className="relative mt-1 px-0 ">
      <section className="bg-gray-900 text-white">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="lg:h-400 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Business Solutions
              <span className="sm:block"> Integrate with blockchain</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Get started with our business solutions to integrate blockchain
              technology into your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Business Solutions
            </h2>

            <p className="mt-4 text-gray-300">
              From banking services to hosting services, we have everything you
              need to get started with your business. Use our services to deploy
              your applications, store your documents, and more.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <BsBank2 size={240} className={""} />

              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Banking Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Get a business banking account, set up a merchant account, and
                start accepting crypto payments. Attached are multi-signature
                wallets for your business, on/off-ramp services, and more.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <IoDocumentsSharp size={240} />
              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Document Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Integrate your documents to the blockchain, for secure and
                transparent storage. Use our document services to copyright,
                deploy contracts, store forms, and more.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <IoApps size={240} />
              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                DApp Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Get ready-to-use boilerplates for your decentralized
                applications. Use our DApp services to deploy your applications
                seemlessly, and start earning crypto.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <GrHostMaintenance size={240} />
              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Hosting Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Explore blazing fast hosting services for your applications. Use
                our hosting services to deploy your applications and websites,
                at a fraction of the cost.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <SiRobotframework size={240} />

              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                AI/Bot Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Get ready-to-use AI and Bot services for your applications. Use
                our AI and Bot services to automate your applications, answer
                customer queries, and more.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <SiGamedeveloper size={240} />
              <br />
              <Separator className="col-span-3" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Gaming Services
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Get ready-to-use gaming services for your applications. SDKs,
                APIs, and more to help you get started with your gaming
                applications.
              </p>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Fill in this form to get started with our business solutions. Our
            team will get back to you.
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your full name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="sr-only">
              Company Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your company name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BusinessPage
