"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function LikeElement() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <motion.div onClick={() => setClicked(!clicked)}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", damping: 10, stiffness: 150 }}
            className="cursor-pointer">
            <Heart size={50} fill={`${clicked ? "#ee2677" : "white"}`} stroke="#2f243a" strokeWidth={1.2} />
        </motion.div>
    );
}