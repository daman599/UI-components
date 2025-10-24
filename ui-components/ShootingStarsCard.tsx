export default function ShootingStarsCard({ text }: { text: string }) {
    return (
        <div className="relative w-[20rem] h-[20rem] rounded-4xl p-10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#BEBFED] to-[#3538CF] rounded-4xl"></div>

            {/* Diagonal Line Overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)_2px,transparent_2px,transparent_40px)] rounded-4xl"></div>

            {/* Content */}
            <div className="relative text-2xl font-normal text-white">
                {text}
            </div>
        </div>

    );
}