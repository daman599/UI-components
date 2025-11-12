"use client";

import { Ellipsis, Sparkle, Flag, Hourglass, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ExpandableCard() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            onClick={() => {
                setOpen(!open);
            }}
            className="w-fit border-2 border-[#cacaca] bg-white h-fit rounded-2xl p-3 shadow-xl"
        >
            {!open && (
                <>
                    <div className="flex items-center justify-center gap-10">
                        <motion.div layoutId="Sparkles"
                            className="bg-gray-200 p-2 rounded-xl flex items-center justify-center gap-2">
                            <div><Sparkle /></div>
                            <span className="text-xl font-medium">Backend Optimization</span>
                        </motion.div>

                        <motion.div
                            layoutId="progressBar"
                            className="w-44 flex items-center justify-center gap-3">
                            <div className="w-full h-2 bg-gray-300 rounded-full">
                                <div className="h-full bg-blue-400 rounded-full"
                                    style={{ width: "75%" }}></div>
                            </div>
                            <span className="text-lg text-gray-400">75%</span>
                        </motion.div>
                    </div>

                    <div className="flex items-start justify-between my-3 px-2">
                        <motion.div
                            layoutId="icons"
                            className="flex items-center justify-center gap-3 my-2">
                            <span className="flex items-center justify-center gap-1">
                                <Flag color={"#e773738e"} />
                                <span className="text-gray-500 text-base">Urgent</span>
                            </span>

                            <span className="flex items-center justify-center gap-1">
                                <Hourglass color={"#78dc91a0"} />
                                <span className="text-gray-500 text-base">In progress</span>
                            </span>
                        </motion.div>

                        <motion.div
                            layoutId="avatars"
                            className="flex items-center justify-center -space-x-3">
                            {["Emma", "Alex", "Noah", "Sophia"].map((name) => (
                                <div key={name} className="w-10 h-10 rounded-full bg-[#e2e2e2] border-1 border-[#9c9c9c] cursor-pointer">
                                    < img
                                        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
                                        alt={name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </>
            )}

            {open && (
                <>
                    <motion.div layoutId="Sparkles"
                        className="rounded-xl flex items-center justify-between"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <div className="bg-[#cacaca75] rounded-xl p-3"><Sparkle /></div>
                            <span className="text-xl font-medium">Backend Optimization</span>
                        </div>

                        <div className="bg-[#cacaca75] rounded-xl p-3"><Ellipsis /></div>
                    </motion.div>

                    <motion.div layoutId="progressBar"
                        className="flex items-center justify-center gap-3 my-4 border-2 border-[#cacaca] rounded-full px-3 py-1 w-64 bg-white"
                    >
                        <div className="flex items-center justify-center gap-1">
                            <CheckCircle2 className="text-green-500" size={18} />
                            <span className="text-sm font-medium text-gray-600">3 of 4</span>
                        </div>

                        <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-400 rounded-full"
                                style={{ width: "75%" }}
                            ></div>
                        </div>

                        <span className="text-sm text-gray-500 font-medium">75%</span>
                    </motion.div>

                    <motion.div layoutId="icons"
                        className="flex flex-col items-start justify-center gap-3 my-2"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-1">
                                <Flag color={"#e773738e"} />
                                <span className="text-gray-500 text-base font-medium">Priority : </span>
                            </div>

                            <div className="rounded-xl gap-2 px-3 py-2 bg-[#e1b6b66b] flex items-center justify-center">
                                <p className="text-gray-500 text-base font-medium">Urgent</p>
                                <div className="flex items-center justify-center rounded-lg bg-white p-1">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-1">
                                <Hourglass color={"#78dc91a0"} />
                                <span className="text-gray-500 text-base font-medium">Status : </span>
                            </div>

                            <div className="rounded-xl gap-2 px-3 py-2 bg-[#78dc91a0] flex items-center justify-center">
                                <p className="text-gray-500 text-base font-medium">In progress</p>
                                <div className="flex items-center justify-center rounded-lg bg-white p-1"><ChevronDown size={18} /></div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div layoutId="avatars"
                        className="flex items-center justify-center gap-3 my-4">
                        {["Emma", "Alex", "Noah", "Sophia"].map((name) => (
                            <div key={name} className="flex items-center justify-center gap-0.5 px-3 py-0.5 rounded-full bg-[#cacaca75] border-1 border-[#9c9c9c] cursor-pointer shadow-lg">
                                < img
                                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
                                    alt={name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="text-base text-[#717171] font-medium">{name}</span>
                            </div>
                        ))}
                    </motion.div>
                </>
            )}

        </div >
    );
}