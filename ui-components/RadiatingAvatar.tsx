"use client"

import Image from "next/image";
import { motion } from "motion/react";

export default function RadiatingAvatar() {
    return (
        <div className="relative flex flex-col items-center justify-center">

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 4 }}
                className="absolute w-60 h-60 rounded-full bg-[#727273d1]">
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.13, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, ease: "easeInOut", duration: 3, delay: 1 }}
                className="absolute w-56 h-56 rounded-full bg-[#4f4f50]">
            </motion.div>

            <div className="absolute w-48 h-48 rounded-full bg-[#37393b]"></div>

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