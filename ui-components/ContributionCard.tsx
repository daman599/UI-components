"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, LoaderPinwheel, BadgeTurkishLira, TreePalm } from "lucide-react";
import { motion } from "motion/react";

interface ItemsType {
    Icon: React.ComponentType,
    bgcolor: string,
    contriNumber: number,
    contriOrg: string,
}

const Items: ItemsType[] = [
    { Icon: LoaderPinwheel, bgcolor: "bg-[#ffd437]", contriNumber: 310, contriOrg: "Zepto" },
    { Icon: BadgeTurkishLira, bgcolor: "bg-[#cf4242]", contriNumber: 200, contriOrg: "Numora" },
    { Icon: TreePalm, bgcolor: "bg-[#f646ff]", contriNumber: 70, contriOrg: "Finnova" },
];

export default function ContributionCard() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="bg-black w-7/12 h-fit rounded-3xl p-6">
            {!isOpen && (
                <>
                    <p className="text-white text-2xl">581 contributions in 2025</p>
                    <Image
                        src={"/Github-pic.png"}
                        alt={"github"}
                        width={1000}
                        height={1000}
                        className="rounded-lg my-3"
                    />
                    <motion.div
                        layoutId={"contribution"}
                        className="w-full bg-[#23243456] flex items-center justify-between p-3 rounded-lg border-2 border-[#81818137]">
                        <p className="text-xl text-white font-medium">Top contributions in : </p>

                        <div className="flex items-center justify-between gap-5">
                            <div className="flex items-center justify-center gap-1 -space-x-3">
                                {Items.map((obj, i) => {
                                    const Icon = obj.Icon;
                                    return (
                                        <div key={i} className={`flex items-center justify-center p-1 ${obj.bgcolor} rounded-full`} >
                                            <Icon />
                                        </div>
                                    );
                                })}
                            </div>

                            <motion.div onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-full border-1 border-[#60606087]"
                            >
                                <ChevronDown color={"#959595"} size={18} />
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}

            {isOpen && (
                <motion.div
                    layoutId={"contribution"}
                    className="w-full bg-[#23243456] flex flex-col items-start justify-center p-3 rounded-lg border-2 border-[#81818137]"
                >
                    <div className="flex items-center justify-between w-full ">
                        <p className="text-2xl text-white font-medium">Top contributions in : </p>

                        <motion.div onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="cursor-pointer flex items-center justify-center p-1 w-8 h-8 rounded-full border-1 border-[#60606087]"
                        >
                            <ChevronDown color={"#959595"} size={20} />
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-5 my-5">
                        {Items.map((obj, i) => {
                            const Icon = obj.Icon;
                            return (
                                <div key={i} className="flex items-center justify-between w-full px-3">
                                    <div className="flex items-start justify-center gap-5">
                                        <div key={i} className={`flex items-center justify-center p-1 ${obj.bgcolor} rounded-full`} >
                                            <Icon />
                                        </div>
                                        <span className="text-xl text-[#83838384] font-medium">{obj.contriOrg}</span>
                                    </div>

                                    <div className="text-xl text-[#83838384] font-medium">{obj.contriNumber}</div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            )
            }
        </div >
    );
}