export function AssetLedger({show = false}) {

    if (!show) {
        return null
    }



    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-6 py-2">
            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Core Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0xD42833997c73B951100323A7F043935c47d1C8e5</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The core wallet holds all transactions coming into iGate from services and utilities
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Development Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0x0126de0FA6496AC7b9d521c30cFb488551dA17aD</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The development wallet is used to fund development and testing of new features and services
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Marketing Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0x7993B9425ad69dbe6DDB75231dE0700dcE64aE16</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The marketing wallet is used to fund marketing and advertising campaigns for iGate
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Business Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0x4Df7F87AcEDa1E05bee4BC97B4B7765EA2D2f7CC</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The business wallet is used to fund business services and operations
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Charity Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0xd3AEB25D14e79e95b4fe6f3136037c3ff3015a7C</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The charity wallet is used to fund charitable donations and charity programs
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

            <a
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                            Network Wallet
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">0x3b5Ca682F457077272FBaaF54000288595Aec765</p>
                    </div>

                </div>

                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        The network wallet is used to fund the development and maintenance of the iGate network
                    </p>
                </div>

                <dl className="mt-6 flex gap-60 sm:gap-56">
                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Current Balance</dt>
                    </div>

                    <div className="flex">
                        <dt className="text-sm font-medium text-gray-600">Token</dt>
                    </div>
                </dl>
                <dl className="mt-6 flex gap-65 sm:gap-72">
                    <dd className="text-xs text-gray-500">0.000000</dd>

                    <dd className="text-xs text-gray-500">ETH</dd>
                </dl>
            </a>

        </div>
    )
}