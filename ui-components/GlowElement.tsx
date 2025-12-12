export default function GlowElement() {
    return (
        <div className="relative group flex items-center">
            <div className="absolute bg-blue-400 m-auto inset-0 rounded-full blur-md w-24 h-8
                            group-hover:scale-150 transition duration-500" />

            <div className="relative shadow-xl text-2xl cursor-pointer
                             text-black backdrop-blur-sm border border-gray-300 group-hover:border-blue-500/30 transition duration-500
                             rounded-full py-4 px-10">
                Button
            </div>
        </div>
    );
}