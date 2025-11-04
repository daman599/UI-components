"use client"
import { Settings } from "lucide-react";
import { useState } from "react";

export default function GlassDatePicker() {
    const [viewMode, setViewMode] = useState<"Weekly" | "Monthly">("Weekly");

    return (
        <>
            <div className="bg-gradient-to-tl from-[#e93232] via-[#f8ab4d] to-[#e89032] bottom-55 absolute w-75 h-45"> </div>
            <div className="relative w-90 h-80 bg-transparent border-1 border-[#efefef] rounded-3xl p-5 backdrop-blur-2xl">
                <div className="w-full flex items-center justify-between gap-5">
                    <span className="bg-[#f0f0f09c] flex flex-1 items-center justify-between p-1 rounded-xl">
                        <button
                            onClick={() => {
                                setViewMode("Weekly");
                            }}
                            className={`${viewMode === "Weekly" ? "bg-white text-black" : "text-[#878787]"} w-1/2 p-2 transition-colors duration-300 rounded-xl cursor-pointer`}>
                            <span>Weekly</span>
                        </button>

                        <button
                            onClick={() => {
                                setViewMode("Monthly");
                            }}
                            className={`${viewMode === "Monthly" ? "bg-white text-black" : "text-[#878787]"} w-1/2 p-2 transition-colors duration-300 rounded-xl cursor-pointer`}>
                            <span>Monthly</span>
                        </button>
                    </span>

                    <div className="w-12 h-12 rounded-full bg-[#f4f4f498] flex items-center justify-center">
                        <Settings />
                    </div>
                </div>

            </div >
        </>
    );
}
