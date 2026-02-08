"use client";
import { useRef, useEffect } from "react";

export const EyesMove = () => {
    const dotRef = useRef<(HTMLDivElement | null)[]>([]);
    const eyeRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        function handleMove(e: MouseEvent) {
            if (!eyeRef.current || !dotRef.current) return;

            eyeRef.current.forEach((eye, i) => {
                if (!eye) return;

                const dot = dotRef.current[i];

                if (!dot) return;
                const dotRect = dot.getBoundingClientRect();

                const rect = eye.getBoundingClientRect();

                //eye center
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                //direction of mouse
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                const maxRadius = rect.width / 2 - dotRect.width / 2 - 1;

                const distance = Math.min(
                    Math.sqrt(mouseX * mouseX + mouseY * mouseY), maxRadius);

                //dot move direction 
                const angle = Math.atan2(mouseY, mouseX);

                //final coordinates 
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                dot.style.transform = `translate(${x}px, ${y}px)`
            })
        }

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [])

    return (
        <div className="bg-black rounded-xl flex items-center justify-center gap-5 px-5 py-2 min-w-max">
            <p className="text-neutral-300 text-xl">Get in touch</p>

            <div className="flex items-center justify-center gap-1">
                {[0, 1].map((_, i) => (
                    <div key={i} ref={(ele) => {
                        if (!eyeRef.current) return;
                        eyeRef.current[i] = ele;
                    }} className="size-6 rounded-full bg-white flex items-center justify-center">
                        <div ref={(ele) => {
                            if (!dotRef.current) return;
                            dotRef.current[i] = ele;
                        }}
                            className="size-2 rounded-full bg-black" />
                    </div>
                ))}
            </div>
        </div >
    );
}