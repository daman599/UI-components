"use client"

import Image from "next/image";
import { motion } from "motion/react";

export default function RadiatingAvatar() {
    return (
        <div className="relative flex flex-col items-center justify-center">

            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 3 }}
                className="absolute w-64 h-64 rounded-full bg-[#727273d1]">
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 2, delay: 0.5 }}
                className="absolute w-56 h-56 rounded-full bg-[#4f4f50]">
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 1, delay: 1 }}
                className="absolute w-48 h-48 rounded-full bg-[#37393b]">
            </motion.div>

            <Image
                src={"/Profile-pic.png"}
                width={160}
                height={160}
                alt={"Profile-pic"}
                className="rounded-full relative z-10"
            />
        </div >
    );
}