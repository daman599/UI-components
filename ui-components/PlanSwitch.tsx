"use client"

import { useState } from "react";
import { motion } from "motion/react";

export default function PlanSwitch() {

    const [plan, setPlan] = useState<"Free" | "Premium">("Free");

    return (
        <div className=" flex items-center w-[28rem] h-[4rem] bg-white border-2 border-[#cfcfcf] rounded-full overflow-hidden
        shadow-lg backdrop-blur-3xl">

            <motion.div className="absolute top-0 left-0 w-1/2 h-full bg-black rounded-full"
                animate={{ x: plan === "Premium" ? "100%" : "0%" }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                }}>
            </motion.div>

            <div className="relative flex w-full z-10">
                <button className={`w-[14rem] h-[4rem] ${plan === "Free" ? " text-white" : " text-black"}
              rounded-full cursor-pointer`}
                    onClick={() => {
                        setPlan("Free");
                    }}
                >
                    <span className="font-medium text-center text-xl">Free</span>
                </button>

                <button className={`w-[14rem] h-[4rem] rounded-full
             cursor-pointer ${plan === "Premium" ? " text-white" : " text-black"}  `}
                    onClick={() => {
                        setPlan("Premium");
                    }}
                >
                    <span className="font-medium text-center text-xl" >Premium</span>
                </button>
            </div>
        </div >
    );
}