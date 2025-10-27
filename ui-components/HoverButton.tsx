"use client"
import { ArrowRight } from "lucide-react";

export default function HoverButton() {
    return (
        <button className="reative group flex items-center gap-2 p-2 px-6 border-2 border-[#e7e7e7] rounded-full overflow-hidden cursor-pointer">
            <div className="bg-black w-2 h-2 rounded-full group-hover:scale-[40] transition-all duration-500"></div>
            <span className="text-xl font-semibold group-hover:translate-x-12 transition-all duration-500">Hover Me</span>

            <div className="absolute text-white text-xl flex items-center gap-2 p-2 font-semibold transition-all duration-500 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                <span>Hover Me</span>
                <ArrowRight />
            </div>
        </button >
    );
}