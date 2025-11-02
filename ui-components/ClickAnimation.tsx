"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
    Target,
    Layers,
    Send,
    FlaskConical,
    LineChart,
    ChevronDown,
} from "lucide-react";

type itemsType = {
    title: string,
    description: string,
    icon: React.ComponentType<{ color: string, className: string }>,
}

export default function ClickAnimation() {
    const [openBtnIndex, setOpenBtnIndex] = useState<number | null>(null);

    const items: itemsType[] = [
        {
            title: "What is Interaction Design?",
            description: "Learn how design shapes user actions and creates meaningful digital experiences.",
            icon: Target,
        },
        {
            title: "Principles & Patterns",
            description: "Fundamental guidelines and repeated solutions that ensure consistency and usability in design.",
            icon: Layers,
        },
        {
            title: "Usability & Accessibility",
            description: "Design inclusive, user-friendly interfaces for all types of users.",
            icon: LineChart,
        },
        {
            title: "Prototyping & Testing",
            description: "Turn ideas into interactive prototypes and validate them through testing.",
            icon: FlaskConical,
        },
        {
            title: "UX Optimisation",
            description: "Enhance product usability and satisfaction with data-driven improvements.",
            icon: Send,
        },
    ]

    return (
        <div className="w-100 my-auto shadow-lg border-2 flex flex-col gap-6 border-[#e8e8e8] rounded-2xl bg-white p-2 px-2 py-3">

            {items.map((item, i) => {
                const Icon = item.icon;
                const isOpen = openBtnIndex === i;

                return (
                    <motion.div
                        transition={{ duration: 1, ease: "easeOut" }}
                        key={i}
                        onClick={() => {
                            setOpenBtnIndex(i);
                        }}
                    >
                        <div
                            className="w-full cursor-pointer flex items-center gap-3 px-3 py-1" >
                            <Icon color={isOpen ? "#5d5d5d" : "#a3a3a3"} className="transition-colors duration-300" />

                            <div className="w-full flex items-center justify-between">
                                <span className="text-xl font-semibold">{item.title}</span>

                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown color={"#a3a3a3"} size={30} />
                                </motion.div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="relative z-10 px-4 pb-3 text-gray-600"
                            >
                                {item.description}
                            </motion.p>}
                        </AnimatePresence>

                    </motion.div>
                );
            })}
        </div >
    );
}