"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function AnimatedNavbar() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <nav className="max-w-3xl border-2 border-[#b0b0b0] shadow-xl flex items-center justify-center px-5 py-3 rounded-full">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
                <Link href={"/"} key={i} className="group w-full relative items-center justify-center px-4 py-2"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <span className="relative text-xl font-medium text-center z-10 group-hover:text-white transition-colors duration-300">{item}</span>
                    {hovered === i && (
                        < motion.div layoutId="hover" className="bg-[#5e0063] absolute inset-0 w-full h-full rounded-full">
                        </motion.div>
                    )}
                </Link>
            ))
            }
        </nav >
    );
}
