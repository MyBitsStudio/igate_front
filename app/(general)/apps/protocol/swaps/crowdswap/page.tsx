"use client";

import {useScript} from "@/lib/utils/UseScript";
import {Card, CardContent} from "@/components/ui/card";
import Script from "next/script";

declare global {
    interface Window {
        crowdswapWidget: any;
    }
}

export default function CrowdSwapPage() {

   // useScript("https://widget.crowdswap.org/loadAssets.js");

    const element = [
        document.getElementsByClassName("splash-div"),
        document.getElementsByClassName("app-splash-screen"),
        document.getElementsByClassName("app-splash-screen__content"),
    ]

    if(element){
        for (let i = 0; i < element.length; i++) {
            if(element[i]){
                element[i].item(1)?.remove();
            }
        }
    }

    return (
        <div className="relative mt-1 px-0 ">
            <Script src="https://widget.crowdswap.org/loadAssets.js" />
            <section className="bg-gray-900 text-white">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="lg:h-400 mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            CrowdSwap
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            CrowdSwap is a decentralized exchange aggregator that sources liquidity from various DEXs and AMMs. Swap tokens from multiple tokens at a low rate.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-white">
                <Card>
                    <CardContent>
                        <>
                        <crowdswap-swap-widget
                            id="crowdswapWidget"
                            config='{
                                "fromTokenAddress":"0x0000000000000000000000000000000000001010",
                                "fromChainId":137,
                                "toTokenAddress":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                                "toChainId":56,
                                "theme":"dark",
                                "affiliateId":"082213"
                            }' />
                        </>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}