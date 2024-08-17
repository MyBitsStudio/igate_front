import {useScript} from "@/lib/utils/UseScript";

export default function SwapPage() {

    return (
        <div>
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
        </div>
    )
}