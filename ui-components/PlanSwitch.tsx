"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PlanSwitch() {
    const [plan, setPlan] = useState<"Free" | "Premium">("Free");
    const [premiumPlan, setPremiumPlan] = useState<"Monthly" | "Annual">("Monthly");

    return (
        <div className="relative flex items-center w-[28rem] h-[4rem] bg-white border-2 border-[#cfcfcf] rounded-full overflow-hidden
    backdrop-blur-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.25)]">

            <motion.div
                className="absolute left-2 top-1 bottom-1 right-1 w-[48%] bg-black rounded-full"
                animate={{ x: plan === "Premium" ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />

            <div className="relative flex items-center w-full z-10 text-center text-xl p-2">
                <button
                    className={`w-[14rem] h-[4rem] ${plan === "Free" ? "text-white" : "text-black"}
            rounded-full cursor-pointer transition-colors duration-300 font-semibold`}
                    onClick={() => setPlan("Free")}
                >
                    Free
                </button>

                <div className={`relative w-[14rem] h-[4rem] rounded-full font-semibold transition-colors duration-300 flex items-center justify-center cursor-pointer 
            ${plan === "Premium" ? "text-white" : "text-black"}`}
                    onClick={() => setPlan("Premium")}
                >
                    <span className={`${plan === "Premium" ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                        Premium
                    </span>

                    <AnimatePresence mode="wait">
                        {plan === "Premium" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center gap-1 text-base p-2"
                            >
                                <motion.div
                                    className="absolute left-0.5 top-2 bottom-2 w-[48.5%] right-0.5 bg-white text-center rounded-full"
                                    animate={{ x: premiumPlan === "Annual" ? "100%" : "0%" }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                />

                                <div
                                    className="w-1/2 h-full flex items-center justify-center text-center z-10 cursor-pointer text-[#b6b6b6]"
                                    onClick={() => setPremiumPlan("Monthly")}
                                >
                                    Monthly
                                </div>

                                <div
                                    className="w-1/2 h-full flex items-center justify-center z-10 cursor-pointer text-[#b6b6b6]"
                                    onClick={() => setPremiumPlan("Annual")}
                                >
                                    Annual
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    );
}