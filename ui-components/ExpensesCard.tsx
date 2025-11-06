"use client"

import { ChevronDown, Bus, ChevronRight, HeartPulse, ShoppingCart, Utensils, Box } from "lucide-react";

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
    return (
        <div className="bg-[#ffffff] w-100 h-fit rounded-2xl p-5 drop-shadow-2xl">
            <div className="text-base font-medium text-[#929292]">
                Novemeber 2025
            </div>

            <div className="flex items-center justify-between py-1">
                <span className="text-2xl font-medium text-[#252525] tracking-wider">$4,604</span>
                <ChevronDown />
            </div>

            <div className="text-[#73da68]">
                You have spent 20% more than last week.
            </div>

            <div className="flex flex-col gap-3 mt-5">
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i}
                            className="flex items-center justify-between w-full p-4 rounded-xl border-1 border-[#dcdcdc] shadow-xs">
                            <span className="flex items-center gap-3">
                                <Icon />
                                <span className="text-lg font-medium">{item.itemName}</span>
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-base">{item.expense}</span>
                                <ChevronRight size={20} />
                            </span>

                        </div>
                    );
                })}
            </div>
        </div >
    );
}