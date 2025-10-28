"use client"

import { ChevronRight } from "lucide-react";

export default function GradientButton() {
    return (
        <button className="relative group flex bg-black items-center cursor-pointer border-1 border-[#bebebe] px-24 py-2 rounded-xl gap-3">
            <span className="font-medium text-xl text-white">Get Started</span>
            <ChevronRight size={20} color={"white"} className="group-hover:translate-x-0.5 transition-all duration-300" />

            <div className="absolute left-20 top-8 bg-[#FF2D95] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-28 top-8 bg-[#8B5CF6] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-32 top-8 bg-[#2DD4BF] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-36 top-8 bg-[#3B82F6] w-9 h-7 rounded-full blur-lg opacity-50"></div>

            <div className="absolute left-38 top-8 bg-[#FB923C] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-40 top-8 bg-[#FF2D95] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-44 top-8 bg-[#D9F99D] w-9 h-7 rounded-full blur-lg opacity-50"></div>
            <div className="absolute left-48 top-8 bg-[#3B82F6] w-9 h-7 rounded-full blur-lg opacity-50"></div>

        </button >
    );
}