"use client"

import { ChevronRight } from "lucide-react";
import { useTime, useTransform, motion } from "motion/react";

export default function GradientButton() {
    const time = useTime();

    const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false });

    const rotateBg = useTransform(rotate, (value) => {
        return `conic-gradient(from ${value}deg, #FF2D95, #8B5CF6, #2DD4BF, #3B82F6, #FB923C, #D9F99D)`
    });

    return (
        <div className="relative">
            <button className="relative z-10 group flex bg-black  border-1 border-[#bebebe] items-center cursor-pointer px-24 py-2 rounded-xl gap-3">
                <span className="font-medium text-xl text-white">Get Started</span>
                <ChevronRight size={20} color={"white"} className="group-hover:translate-x-0.5 transition-all duration-300" />

                <div className="absolute left-20 top-8 bg-[#FF2D95] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-28 top-8 bg-[#8B5CF6] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-32 top-8 bg-[#2DD4BF] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-36 top-8 bg-[#3B82F6] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>

                <div className="absolute left-38 top-8 bg-[#FB923C] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-40 top-8 bg-[#FF2D95] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-44 top-8 bg-[#D9F99D] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>
                <div className="absolute left-48 top-8 bg-[#3B82F6] w-9 h-7 rounded-full blur-lg opacity-50 animate-pulse-slow"></div>

            </button>

            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute -inset-[1px] rounded-xl"
                style={{ background: rotateBg }}>
            </motion.div>
        </div >
    );
}