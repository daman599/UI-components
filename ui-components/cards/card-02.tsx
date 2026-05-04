"use client";

import { Instrument_Sans, Inria_Sans, Inter } from "next/font/google";
import { ChevronRight } from "lucide-react";

const instrument_sans = Instrument_Sans({
    style: "normal",
    weight: ["400"],
    variable: "--font-instrument-sans",
    subsets: ["latin"]
});

const inria_sans = Inria_Sans({
    style: "normal",
    weight: ["400"],
    variable: "--font-inria-sans",
    subsets: ["latin"]
});

const inter = Inter({
    style: "normal",
    weight: ["400"],
    variable: "--font-inter",
    subsets: ["latin"]
});


export const Card02 = () => {
    return (
        <div className="w-2xl h-auto bg-black rounded-4xl px-[11px] py-[10px]">
            <div className="">
                <p className={`${instrument_sans.className} tracking-[1.4px] text-[#C8C5C5]`}>Design that feels obvious.</p>

                <div className="bg-[#0F0F0F] rounded-2xl h-100 relative"
                    style={{
                        clipPath: "polygon(0% 0%, 33.6% 0%, 100.1% 100%, 39% 12%, 100.1% 12.8%, 100.1% 100%, 0% 100%)"
                    }}>

                    <div className={`${instrument_sans.className} tracking-tight absolute top-17 right-7`}>
                        <div className="relative w-40 h-28 text-[#C4C7CB] text-xs">
                            <div className="absolute right-0 flex items-center justify-center rounded-full border border-dashed border-[#C0C0C0]/50 px-4 py-1">
                                Reusability
                            </div>

                            <div className="absolute left-0 top-11 flex items-center justify-center rounded-full border border-dashed border-[#C0C0C0]/50 px-4 py-1">
                                Scalability
                            </div>

                            <div className="absolute right-0 bottom-0 flex items-center justify-center rounded-full border border-dashed border-[#C0C0C0]/50 px-4 py-1">
                                Design System
                            </div>
                        </div>

                    </div>

                    <div className="absolute bottom-28 px-6.5">
                        <h1 className={`${inria_sans.className} text-white text-[40px]`}>Designed to Scale</h1>
                        <p className={`${inter.className} text-base text-[#D0D0D0] mt-1`}>A flexible system that grows seamlessly with your product.</p>
                    </div>

                    <button className={`absolute bottom-10 right-7 flex items-center pl-3.5 pr-1 py-2
                     justify-center rounded-full bg-[#65A8C4] gap-2 text-xs ${inter.className}`}>
                        Explore more
                        <div className="size-6.5 bg-[#0F0F0F] rounded-full flex items-center justify-center">
                            <ChevronRight color={"white"} size={14} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}