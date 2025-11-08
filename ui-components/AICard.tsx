import { Sparkles, UploadCloud, ShieldCheck, Wand } from "lucide-react";
import React from "react";

interface iconsType {
    icon: React.ComponentType<{
        color: string;
        size: number;
    }>;
    title: string;
}

const icons: iconsType[] = [
    { icon: UploadCloud, title: "Upload" },
    { icon: ShieldCheck, title: "Secure" },
    { icon: Wand, title: "Transparent" },
]

export default function AICard() {
    return (
        <div className="bg-white flex flex-col justify-center gap-1 p-4 border-2 border-[#e7e7e7] drop-shadow-[0px_0px_20px_rgba(162,210,255,0.8)] size-90 rounded-3xl">

            <div className="border-1 border-[#c1c1c1] rounded-full p-1 shadow-md shadow-[#abd2f7] mx-auto mt-3">
                <div className="w-fit border-1 border-[#c1c1c1] px-5 py-2 flex items-center justify-center gap-2 rounded-full">
                    <Sparkles color={"#68abeb"} />
                    <span className="text-xl font-medium"> Generating</span>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center gap-3">
                {icons.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <div key={i} className="flex flex-col items-center justify-center border-1 border-[#c1c1c1] shadow-md shadow-[#b5c9dc] rounded-xl p-4 w-24 h-20">
                            <Icon color={"#c1c1c1"} size={60} />
                            <span className="text-sm text-[#989898]">{item.title}</span>
                        </div>
                    );
                })}
            </div>

            <p className="text-black text-2xl font-semibold">AI compliance copilot</p>
            <p className="text-[#9c9c9c] text-lg">Ensure full global compliance with just a single click.</p>
        </div>
    );
}