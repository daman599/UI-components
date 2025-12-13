"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Confetti from "react-confetti-boom";

export default function LikeElement() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <motion.div onClick={() => setClicked(!clicked)}
            whileTap={{ scale: !clicked ? 1.2 : 1 }}
            transition={{ type: "spring", damping: 5, stiffness: 150 }}
            className="cursor-pointer">

            {clicked && <Confetti
                colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0']}
                y={0}
            />}

            <Heart size={50}
                fill={`${clicked ? "#ee2677" : "white"}`}
                stroke="#2f243a"
                strokeWidth={1.2}
                className="relative"
            />
        </motion.div>
    );
}