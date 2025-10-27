"use client"

import Image from "next/image";

export default function TweetCard() {
    return (
        <div className="w-[30rem] h-[25rem] p-5 bg-white border-1 border-[#dadada] rounded-xl shadow-md hover:shadow-lg transition-all duration-300">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image width={50} height={50} alt="Profile pic" src="/profile-pic.png" className="rounded-4xl" />

                    <span className="flex flex-col">
                        <span className="flex items-center gap-1">
                            <p className="font-semibold">Damanpreet Kaur</p>
                            <Image width={25} height={25} src="/Twitter-Verified-Badge-Transparent-Background.png" alt="Twitter Verified Badge" />
                        </span>

                        <a href="https://x.com/daman76752" target="_blank" className="text-[#716e8c] text-sm">
                            @daman76752
                        </a>
                    </span>
                </div>

                <Image width={20} height={20} alt="Twitter logo" src="/Logo_of_Twitter.svg" />
            </div>

            <div className="mt-3">
                <span>Hey there, Daman this side. Checkout my </span>
                <a href="https://daman-portfolio-teal.vercel.app" target="_blank" className="text-[#716e8c]">
                    portfolio
                </a>
                <span> and also follow me on </span>

                <a href="https://x.com/daman76752" target="_blank" className="text-[#716e8c]">
                    @twitter
                </a>

                <span> where I share my learnings.</span>

                <a href="https://x.com/hashtag/buildinpublic" target="_blank" className="text-[#716e8c]"> #buildinpublic
                </a>
            </div>

            <div className="flex-1 rounded-xl object-cover mt-2">
                <Image width={300} height={300} alt="Portfolio" src="/Portfolio.png" className=" h-full w-full object-cover rounded-xl" />
            </div>
        </div >
    );
}