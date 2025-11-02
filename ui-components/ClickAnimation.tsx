"use client"

import { useState } from "react";
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
    icon: React.ComponentType<{ color: string }>,
}

export default function ClickAnimation() {
    const [currentItem, setCurrentItem] = useState<HTMLButtonElement | null>(null);

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
        <div className="w-fit h-fit my-auto border-2 flex flex-col gap-6 border-[#e8e8e8] rounded-2xl bg-white p-2 px-2 py-3">
            {items.map((item, i) => {
                const Icon = item.icon;
                return (
                    <button key={i}
                        className="w-full cursor-pointer flex items-center gap-3 px-3 py-1">
                        <Icon color={"#a3a3a3"} />

                        <div className="w-full flex items-center justify-between">
                            <span className="text-xl font-semibold">{item.title}</span>
                            <ChevronDown color={"#a3a3a3"} size={30} />
                        </div>

                    </button>
                );
            })}
        </div >
    );
}