"use client"
import { motion } from "motion/react";

export default function ShootingStarsCard({ text }: { text: string }) {
    return (
        <div className="relative w-[20rem] h-[20rem] rounded-4xl p-2 overflow-hidden cursor-default">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#BEBFED] to-[#3538CF] rounded-4xl"></div>

            {/* Diagonal Line Overlay */}
            <motion.div
                initial={{ opacity: 0, backgroundPosition: "0% 0%" }}

                whileHover={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0.3, 0.5],  // fade in
                }}
                transition={{
                    duration: 1,
                    ease: "linear",
                }}
                className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)_1px,transparent_1px,transparent_40px)] rounded-4xl"></motion.div>

            {/* Content */}
            <div className="relative text-2xl font-normal text-white p-6">
                {text}
            </div>
        </div >

    );
}