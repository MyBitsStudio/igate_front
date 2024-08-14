"use client";

import {useState} from "react";
import {AssetLedger} from "@/components/app/ledger/ledger";

function LedgerPage() {

    const [section, setSection] = useState('asset');

    return (
        <div className="relative mt-1 px-0 ">
            <section className="bg-gray-900 text-white">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="lg:h-400 mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            Open Ledger
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            At iGate, we believe in transparency. That is why we have made our ledger public. You can
                            view all transactions that have taken place on our platform.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <span className="relative flex justify-center">
                  <div
                      className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                  ></div>

                  <span className="relative z-10 bg-gray-700 px-6">Ledgers</span>
                </span>
                <br/>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    <a
                        onClick={() => setSection('asset')}
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span
                          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Asset Ledgers
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Check out our assets, including wallets, fiat, and other assets held by iGate
                            </p>
                        </div>
                    </a>

                    <a
                        onClick={() => setSection('project')}
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span
                          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Project Ledger
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Check out how our assets are being distributed towards progress of the project
                            </p>
                        </div>

                    </a>

                    <a
                        onClick={() => setSection('expense')}
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span
                          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Expense Ledger and Reports
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Check out how our expenses are being managed and view reports on how funds are being
                                spent
                            </p>
                        </div>
                    </a>

                    <a
                        onClick={() => setSection('donate')}
                        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                    >
                      <span
                          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      ></span>

                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Donate To The Project
                                </h3>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                                Donate to the project and see how your funds are being spent
                            </p>
                        </div>
                    </a>

                </div>

                <br/>
                <span className="relative flex justify-center">
                  <div
                      className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                  ></div>

                  <span className="relative z-10 bg-gray-700 px-6">Ledgers</span>
                </span>

            </section>

            <section className="bg-gray-900 text-white">
                <AssetLedger show={section === 'asset'}/>
            </section>
        </div>
)
}

export default LedgerPage;