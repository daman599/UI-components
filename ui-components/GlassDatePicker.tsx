import { Settings } from "lucide-react";

export default function GlassDatePicker() {
    return (
        <>
            <div className="bg-gradient-to-tl from-[#e93232] via-[#f8ab4d] to-[#e89032] bottom-55 absolute w-75 h-45"> </div>
            <div className="relative w-90 h-80 bg-transparent border-1 border-[#efefef] rounded-3xl p-5 backdrop-blur-2xl">
                <div className="w-full flex items-center justify-between gap-5">
                    <span className="bg-[#f0f0f09c] flex flex-1 items-center justify-between p-1 rounded-xl">
                        <button className="bg-white w-1/2 p-2 rounded-xl cursor-pointer">
                            <span>Weekly</span>
                        </button>

                        <button className="w-1/2 p-2 rounded-xl cursor-pointer">
                            <span className="text-[#878787]">Monthly</span>
                        </button>
                    </span>

                    <div className="w-14 h-14 rounded-full bg-[#e2e2e22d] flex items-center justify-center">
                        <Settings />
                    </div>
                </div>

            </div>
        </>
    );
}
