"use client";
import { Settings, PencilLine, Plus } from "lucide-react";
import { useState } from "react";

const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

export default function GlassDatePicker() {
    const [viewMode, setViewMode] = useState<"Weekly" | "Monthly">("Weekly");

    return (
        <>
            <div className="bg-gradient-to-tl from-[#e93232] via-[#f8ab4d] to-[#e89032] bottom-55 absolute w-75 h-45"></div>

            <div className="relative w-90 h-80 bg-transparent border border-[#efefef] rounded-3xl p-4 backdrop-blur-2xl flex flex-col gap-5">
                <div className="flex items-center justify-between gap-5">
                    <span className="bg-[#f0f0f09c] flex flex-1 items-center justify-between p-1 rounded-xl">
                        <button
                            onClick={() => setViewMode("Weekly")}
                            className={`${viewMode === "Weekly" ? "bg-white text-black" : "text-[#878787]"
                                } w-1/2 p-2 transition-colors duration-300 rounded-xl cursor-pointer`}
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setViewMode("Monthly")}
                            className={`${viewMode === "Monthly" ? "bg-white text-black" : "text-[#878787]"
                                } w-1/2 p-2 transition-colors duration-300 rounded-xl cursor-pointer`}
                        >
                            Monthly
                        </button>
                    </span>

                    <div className="w-12 h-12 rounded-full bg-[#f4f4f498] flex items-center justify-center">
                        <Settings />
                    </div>
                </div>

                <p className="text-2xl text-black font-medium text-center">November 04</p>

                <div className="flex flex-col flex-1 items-center justify-center">
                    <svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#efefef" stopOpacity={0.5} />
                                <stop offset="50%" stopColor="#ff6a00" stopOpacity={1} />
                                <stop offset="100%" stopColor="#efefef" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>

                        <path id="textCurve" d="M 10 45 Q 150 5 280 45" fill="transparent" stroke="none" />

                        <path d="M 10 50 Q 150 10 280 50" stroke="url(#grad1)" fill="none" strokeWidth="2" />
                        <path d="M 10 90 Q 150 40 280 90" stroke="url(#grad1)" fill="none" strokeWidth="2" />

                        <text fontSize="16" fill="#ffffff" textAnchor="middle">
                            <textPath href="#textCurve" startOffset="50%">
                                {"Sun\u00A0\u00A0\u00A0Mon\u00A0\u00A0\u00A0Tue\u00A0\u00A0\u00A0Wed\u00A0\u00A0\u00A0Thu\u00A0\u00A0\u00A0Fri\u00A0\u00A0\u00A0Sat"}
                            </textPath>
                        </text>
                    </svg>

                    <div className="absolute w-70 overflow-x-auto scrollbar-hide flex items-center gap-8 text-xl">
                        {dates.map((date, i) => (
                            <span key={i}>{date}</span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-white">
                        <PencilLine color="white" size={20} />
                        Add a note...
                    </span>

                    <span className="w-28 h-7 bg-[#ebebeb] flex items-center justify-center gap-1 text-sm rounded-full p-1">
                        <Plus size={18} />
                        New Event
                    </span>
                </div>
            </div>
        </>
    );
}
