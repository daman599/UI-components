"use client"

import Image from "next/image";
import { motion } from "motion/react";

const avatars = [
    { path: "/Avatar5.jpeg", z: 50 },
    { path: "/Avatar2.jpeg", z: 40 },
    { path: "/Avatar3.jpeg", z: 30 },
    { path: "/Avatar1.jpeg", z: 20 },
    { path: "/Avatar4.jpeg", z: 10 },
];

export default function AvatarStack() {
    return (
        <div className="flex items-center justify-center -space-x-20">
            {avatars.map((avatar, i) => (
                <motion.div
                    initial={{ filter: "blur(1px)" }}
                    whileHover={{ y: -50, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    key={i} className={`size-40 cursor-pointer rounded-full relative bg-black overflow-hidden `}
                    style={{ zIndex: avatar.z }}>
                    <Image src={avatar.path}
                        fill
                        alt={"Avatar Image"}
                        className="object-contain"
                    />
                </motion.div>
            ))
            }
        </div >
    );
}