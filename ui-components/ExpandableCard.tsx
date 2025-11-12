"use client";

import { Sparkle, Flag, Hourglass } from "lucide-react";

export default function ExpandableCard() {
    return (
        <div className="w-fit border-2 border-[#cacaca] bg-white h-fit rounded-2xl p-3 shadow-xl">
            <div className="flex items-center justify-center gap-10">
                <div className="bg-gray-200 p-2 rounded-xl flex items-center justify-center gap-2">
                    <Sparkle />
                    <span className="text-xl font-medium">Backend Optimization</span>
                </div>

                <div className="w-44 flex items-center justify-center gap-3">
                    <div className="w-full h-2 bg-gray-300 rounded-full">
                        <div className="h-full bg-blue-400 rounded-full"
                            style={{ width: "75%" }}></div>
                    </div>
                    <span className="text-lg text-gray-400">75%</span>
                </div>
            </div>

            <div className="flex items-start justify-between my-3 px-2">
                <div className="flex items-center justify-center gap-3 my-2">
                    <span className="flex items-center justify-center gap-1">
                        <Flag color={"#e773738e"} />
                        <span className="text-gray-500 text-base">Urgent</span>
                    </span>

                    <span className="flex items-center justify-center gap-1">
                        <Hourglass color={"#78dc91a0"} />
                        <span className="text-gray-500 text-base">In progress</span>
                    </span>
                </div>

                <div className="flex items-center justify-center -space-x-3">
                    {["Emma", "Alex", "Noah", "Sophia"].map((name) => (
                        <div key={name} className="w-10 h-10 rounded-full bg-[#e2e2e2] border-1 border-[#9c9c9c] cursor-pointer">
                            < img
                                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
                                alt={name}
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}