"use client"

import { useState } from "react";
import { motion } from "motion/react";

export default function PlanSwitch() {

    const [plan, setPlan] = useState<"Free" | "Premium">("Free");

    return (
        <div className=" relative flex items-center w-[28rem] h-[4rem] bg-white border-2 border-[#cfcfcf] rounded-full overflow-hidden
        backdrop-blur-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.25)]
        ">
            <motion.div className="absolute top-0 left-0 w-1/2 h-full bg-black rounded-full "
                animate={{ x: plan === "Premium" ? "100%" : "0%" }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                }}>
            </motion.div>

            <div className="relative flex items-center w-full z-10 font-semibold text-center text-xl p-2">
                <button className={`w-[14rem] h-[4rem] ${plan === "Free" ? " text-white" : " text-black"}
              rounded-full cursor-pointer transition-colors duration-300`}
                    onClick={() => {
                        setPlan("Free");
                    }}
                >
                    <span>Free</span>
                </button>

                <button className={`w-[14rem] h-[4rem] rounded-full transition-colors duration-300
             cursor-pointer ${plan === "Premium" ? " text-white" : " text-black"}  `}
                    onClick={() => {
                        setPlan("Premium");
                    }}
                >
                    <span>Premium</span>
                </button>
            </div>
        </div >
    );
}