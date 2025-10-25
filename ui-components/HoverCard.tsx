"use client";
import { motion } from "motion/react";

interface PropsType {
    text: string;
    color1?: string;
    color2?: string;
    textColor?: string;
}

export default function HoverCard({
    text,
    color1 = "#BEBFED",
    color2 = "#3538CF",
    textColor = "white",
}: PropsType) {
    return (
        <div className="relative w-[20rem] h-[20rem] rounded-4xl p-2 overflow-hidden">

            {/* Background Gradient */}
            <div style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}
                className={`absolute inset-0 rounded-4xl`}>
            </div>

            {/* Diagonal Line Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{
                    duration: 0.8,
                    ease: "linear",
                }}
                className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)_1px,transparent_0px,transparent_40px)] rounded-4xl"
            ></motion.div>

            {/* Content */}
            <div className={`relative text-2xl font-normal text-[${textColor}] p-6 z-20`}>
                {text}
            </div>
        </div>
    );
}