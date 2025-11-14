import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ContributionCard() {
    return (
        <div className="bg-black w-7/12 h-fit rounded-3xl p-6">
            <p className="text-white text-2xl">581 contributions in 2025</p>
            <Image
                src={"/Github-pic.png"}
                alt={"github"}
                width={1000}
                height={1000}
                className="rounded-lg my-3"
            />

            <div className="w-full bg-[#23243456] flex items-center justify-between p-3 rounded-lg border-2 border-[#81818137]">
                <p className="text-xl text-white font-medium">Top contributions in : </p>

                <div className="flex items-center justify-center w-6 h-6 rounded-full border-1 border-[#60606087]">
                    <ChevronDown color={"#959595"} size={18} />
                </div>
            </div>
        </div >
    );
}