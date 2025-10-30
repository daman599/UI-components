"use client";

import { useState } from "react";
import { Plus, CircleX, Folder } from "lucide-react";

export default function CreateNewButton() {
    const [btnClicked, setBtnClicked] = useState<boolean>(false);

    return (
        <div className="relative">
            {!btnClicked &&
                <button
                    onClick={() => {
                        setBtnClicked(true);
                    }}
                    className="relative z-10 flex border-2 border-[#c6c6c6b4] p-2 px-8 rounded-full bg-[#ebebeb95] cursor-pointer shadow-md">
                    <span className="flex items-center gap-2 text-xl font-medium">
                        <Plus />
                        <p>Create New</p>
                    </span>
                </button>
            }

            {btnClicked && <div className="absolute inset-0 w-[20rem] h-[18rem] border-2 overflow-hidden border-[#c6c6c6b4] bg-[#ebebeb95] rounded-3xl flex flex-col">
                <div className="flex items-center justify-between p-3 px-4">
                    <p className="text-xl text-[#7c7c7cb4]">Create New</p>
                    <CircleX onClick={() => {
                        setBtnClicked(false);
                    }} className="cursor-pointer" />
                </div>

                <div className="bg-white flex-1 rounded-t-3xl p-5">
                    <div>
                        <Folder />
                        <span>Project</span>
                    </div>

                </div>
            </div>
            }
        </div>
    );
}