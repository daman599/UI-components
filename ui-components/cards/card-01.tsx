import Image from "next/image";
import { Inter, Instrument_Serif } from "next/font/google";
import { NoiseBackground } from "@/components/ui/noise-background";

const inter = Inter({
    style: "normal",
    weight: ["100", "200", "300", "400", "500", "600"],
    variable: "--font-inter",
    subsets: ["latin"]
});

const instrument_serif = Instrument_Serif({
    style: "italic",
    weight: ["400"],
    variable: "--font-instrument-serif",
    subsets: ["latin"]
});

export const Card01 = () => {
    return (
        <div className="w-xl h-auto bg-white rounded-3xl border-1 border-neutral-200 p-4.5 ">
            <div className="relative w-full h-100 group overflow-hidden">
                <Image
                    src={"/cuteTeddy.png"}
                    alt={"cute teddy pic"}
                    fill
                    className="object-cover rounded-xl"
                />

                <div className="absolute top-0 left-[-75%] h-full w-1/2 
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    blur-sm opacity-80
    transition-all duration-700 ease-out
    group-hover:left-[125%]"
                />
            </div>

            <div className="mt-10">
                <p className={`${inter.variable} font-semibold text-4xl`}>hey, this is
                    <span className={`${instrument_serif.className} `}>{" "} Daman</span></p>

                <p className={`${inter.className} font-normal mt-3 text-base text-[#434343] max-w-115`}>
                    Whatever I design, I can code that and can add some touch of animation as well.</p>
            </div>

            <div className="w-full flex items-center justify-between mt-23 mb-2">
                <div className="flex items-center justify-center gap-2 ">
                    <div className="size-2 bg-[#2D6EBE] rounded-full shadow shadow-[#2D6EBE]" />
                    <span className={`${inter.className} text-[#191919] text-sm`}>Designer & Developer</span>
                </div>

                <NoiseBackground className={`relative text-sm ${inter.className} font-mdium tracking-[1px] py-1 px-6`}>
                    <span>Follow</span>

                    <span className="size-[7px] border-t-1 border-r-1 absolute right-0 top-0 border-black" />
                    <span className="size-[7px] border-r-1 border-b-1 right-0 bottom-0 absolute border-black" />
                    <span className="size-[7px] border-l-1 border-b-1 absolute bottom-0 left-0 border-black" />
                    <span className="size-[7px] border-t-1 border-l-1 absolute top-0 left-0 border-black" />
                </NoiseBackground>

            </div>
        </div>
    );
}