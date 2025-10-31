"use client";

import { useState } from "react";
import {
    Plus,
    CircleX,
    Folder,
    Trophy,
    Flag,
    BookCheck,
    NotebookPen,
    ScrollText,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ContentType {
    title: string;
    icon: React.ComponentType<{ size: number; color: string }>;
}

const content: ContentType[] = [
    { title: "Project", icon: Folder },
    { title: "Task", icon: NotebookPen },
    { title: "Notes", icon: ScrollText },
    { title: "Goal", icon: Trophy },
    { title: "Milestone", icon: Flag },
    { title: "Reminder", icon: BookCheck },
];

export default function CreateNewButton() {
    const [btnClicked, setBtnClicked] = useState<boolean>(false);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[20rem]">
            {!btnClicked && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => setBtnClicked(true)}
                    className="relative z-10 flex border-2 border-[#c6c6c6b4] p-2 px-8 rounded-full bg-[#ebebeb95] cursor-pointer shadow-md"
                >
                    <span className="flex items-center gap-2 text-xl font-medium">
                        <Plus />
                        <p>Create New</p>
                    </span>
                </motion.button>
            )}

            <AnimatePresence>
                {btnClicked && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        origin-center absolute inset-0 w-[20rem] h-[20rem] border-2 border-[#c6c6c6b4] bg-[#ebebeb95] rounded-3xl flex flex-col overflow-hidden shadow-lg"
                    >
                        <div className="flex items-center justify-between p-3 px-6">
                            <p className="text-xl text-[#7c7c7cb4]">Create New</p>
                            <CircleX
                                onClick={() => setBtnClicked(false)}
                                className="cursor-pointer"
                            />
                        </div>

                        <div className="bg-white flex-1 rounded-t-3xl p-5">
                            <div className="grid grid-cols-3 gap-4 place-items-center">
                                {content.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center justify-center gap-2 w-[6rem] h-[6rem] hover:bg-[#ebebeb95] rounded-2xl p-3 transition"
                                        >
                                            <Icon color="#7c7c7cb4" size={30} />
                                            <span className="text-[#5f5f5fb4]">{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}