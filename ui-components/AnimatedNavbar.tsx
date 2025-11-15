"use client";

import Link from "next/link";
import { useState } from "react";

export default function AnimatedNavbar() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <nav className="max-w-2xl border-2 border-[#b0b0b0] shadow-xl flex items-center justify-center gap-14 px-5 py-3 rounded-full">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
                <Link href={"/"} key={i} className="group w-full relative items-center justify-center px-4 py-2"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <span className="relative text-2xl font-medium z-10 group-hover:text-white transition-colors duration-300">{item}</span>
                    {hovered === i &&
                        <div className="bg-[#000000] absolute inset-0 w-full h-full rounded-full cursor-pointer">
                        </div>
                    }
                </Link>
            ))}
        </nav>
    );
}
