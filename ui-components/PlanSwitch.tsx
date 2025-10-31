"use client"

import { useState } from "react";

export default function PlanSwitch() {
    const [plan, setPlan] = useState<"Free" | "Premium">("Free");
    return (
        <div className="flex items-center w-[28rem] h-[4rem] bg-white border-2 border-[#cfcfcf] rounded-full overflow-hidden
        shadow-lg backdrop-blur-3xl">
            <button className={`w-[14rem] h-[4rem] ${plan === "Free" ? "bg-black text-white" : "bg-white text-black"} bg-black rounded-full cursor-pointer`}
                onClick={() => {
                    setPlan("Free");
                }}
            >
                <span className="font-semibold text-center text-xl">Free</span>
            </button>

            <button className={`w-[14rem] h-[4rem] rounded-full cursor-pointer  ${plan === "Premium" ? "bg-black text-white" : "bg-white text-black"}  `}
                onClick={() => {
                    setPlan("Premium");
                }}
            >
                <span className="font-semibold text-center text-xl" >Premium</span>
            </button>
        </div >
    );
}