"use client"

import { ChevronDown, Bus, ChevronRight, HeartPulse, ShoppingCart, Utensils, Box } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface itemsType {
    itemName: string;
    icon: React.ComponentType;
    expense: string;
}

const items: itemsType[] = [
    {
        itemName: "Transport",
        icon: Bus,
        expense: "18%",
    },
    {
        itemName: "Shopping",
        icon: ShoppingCart,
        expense: "32%",
    },
    {
        itemName: "Food & Drinks",
        icon: Utensils,
        expense: "27%",
    },
    {
        itemName: "Medical",
        icon: HeartPulse,
        expense: "14%",
    },
    {
        itemName: "Others",
        icon: Box,
        expense: "9%",
    },
]

export default function ExpensesCard() {
    const [btnClicked, setBtnClicked] = useState<boolean>(false);

    return (
        <motion.div
            layout
            transition={{ duration: 0.3 }}
            className="bg-white w-100 h-fit rounded-2xl p-5 drop-shadow-2xl">
            <div className="text-base font-medium text-[#929292]">
                Novemeber 2025
            </div>

            <div className="flex items-center justify-between py-1">
                <span className="text-2xl font-medium text-[#252525] tracking-wider">$4,604</span>

                <motion.span
                    animate={{ rotate: btnClicked ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown onClick={() => {
                        setBtnClicked(!btnClicked);
                    }}
                        className="cursor-pointer" />
                </motion.span>
            </div>

            <div className="text-[#4ac53d]">
                You have spent 20% more than last week.
            </div>

            <AnimatePresence>
                {btnClicked && <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3 mt-5">

                    {items.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="relative flex items-center justify-between w-full overflow-hidden p-4 rounded-xl border-1 border-[#dcdcdc] shadow-xs">
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    whileInView={{ opacity: 1, width: `${item.expense}` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    exit={{ width: 0 }}
                                    className="absolute left-0 h-16 bg-[#dcdcdc] rounded-sm"
                                >
                                </motion.div>
                                <span className="flex items-center gap-3 z-10">
                                    <Icon />
                                    <span className="text-lg font-medium">{item.itemName}</span>
                                </span>

                                <span className="flex items-center gap-2 z-10">
                                    <span className="text-base">{item.expense}</span>
                                    <ChevronRight size={20} />
                                </span>
                            </div>
                        );
                    })}
                </motion.div>}
            </AnimatePresence >
        </motion.div >
    );
}