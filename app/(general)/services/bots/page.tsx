import { Separator } from "@/components/ui/separator"

function BusinessPage() {
  return (
      <div className="relative mt-1 px-0 ">
          <section className="bg-gray-900 text-white">
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="lg:h-400 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                  <div className="mx-auto max-w-3xl text-center">
                      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                          Customer Service Bots
                          <span className="sm:block"> Integrate with any site</span>
                      </h1>

                      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                          Use our customer service bots to automate your customer service
                          and support. Integrate with any site, and start answering customer
                          queries in seconds.
                      </p>
                  </div>
              </div>
          </section>

          <Separator/>

          <section className="bg-gray-900 text-white">
              <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-20">
                      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="p-6 sm:px-8 text-center">
                              <h2 className="text-lg font-medium text-white">
                                  Basic
                                  <span className="sr-only">Plan</span>
                              </h2>

                              <p className="mt-2 text-white">Non-AI Customer Service Bot</p>

                              <p className="mt-2 sm:mt-4">
                                  <strong className="text-3xl font-bold text-white sm:text-4xl"> 5.99$ </strong>

                                  <span className="text-sm font-medium text-white">/month</span>
                              </p>

                              <a
                                  className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                  href="#"
                              >
                                  Get Started
                              </a>
                          </div>

                          <div className="p-6 sm:px-8 text-center">
                              <p className="text-lg font-medium text-blue-600 sm:text-xl">What is included:</p>

                              <ul className="mt-2 space-y-2 sm:mt-4">
                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> 1000 Requests / Month </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> Help Center Access </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> 12-72 Hour Training </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-red-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                      </svg>

                                      <span className="text-gray-700"> AI </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-red-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                      </svg>

                                      <span className="text-gray-700"> VIP Support </span>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="p-6 sm:px-8 text-center">
                              <h2 className="text-lg font-medium text-white">
                                  Advanced
                                  <span className="sr-only">Plan</span>
                              </h2>

                              <p className="mt-2 text-white">Non-AI / AI Customer Service Bot</p>

                              <p className="mt-2 sm:mt-4">
                                  <strong className="text-3xl font-bold text-white sm:text-4xl"> 12.99$ </strong>

                                  <span className="text-sm font-medium text-white">/month</span>
                              </p>

                              <a
                                  className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                  href="#"
                              >
                                  Get Started
                              </a>
                          </div>

                          <div className="p-6 sm:px-8 text-center">
                              <p className="text-lg font-medium text-blue-600 sm:text-xl">What is included:</p>

                              <ul className="mt-2 space-y-2 sm:mt-4">
                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> 5000 Requests / Month </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> Help Center Access </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> 2-24 Hour Training </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> AI </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-red-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                      </svg>

                                      <span className="text-gray-700"> VIP Support </span>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="p-6 sm:px-8 text-center">
                              <h2 className="text-lg font-medium text-white">
                                  Ultimate
                                  <span className="sr-only">Plan</span>
                              </h2>

                              <p className="mt-2 text-white">Non-AI / AI Customer Service Bot</p>

                              <p className="mt-2 sm:mt-4">
                                  <strong className="text-3xl font-bold text-white sm:text-4xl"> 24.99$ </strong>

                                  <span className="text-sm font-medium text-white">/month</span>
                              </p>

                              <a
                                  className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                  href="#"
                              >
                                  Get Started
                              </a>
                          </div>

                          <div className="p-6 sm:px-8 text-center">
                              <p className="text-lg font-medium text-blue-600 sm:text-xl">What is included:</p>

                              <ul className="mt-2 space-y-2 sm:mt-4">
                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> Unlimited Requests / Month </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> Help Center Access </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> Priority Training </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> AI </span>
                                  </li>

                                  <li className="flex items-center gap-1">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="size-5 text-indigo-700"
                                      >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                      </svg>

                                      <span className="text-gray-700"> VIP Support </span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

          </section>

          <Separator/>

          <section className="bg-gray-900 text-white">

          </section>


      </div>
)
}

export default BusinessPage
