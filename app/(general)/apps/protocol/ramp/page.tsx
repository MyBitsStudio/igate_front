import {useScript} from "@/lib/utils/UseScript";

export default function RampPage() {

    return (
        <div>
            <section className="bg-gray-900 text-white">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="lg:h-400 mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            On/Off Ramps
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Buy and sell crypto with ease. We have partnered with multiple on/off ramps to provide you with the best rates possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <div
                    className="mx-6 grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[160px_1fr]"
                >
                    <div className="h-32 rounded-lg bg-gray-800"></div>
                    <div className="h-32 rounded-lg bg-gray-800"></div>
                </div>

            </section>
        </div>
    )
}