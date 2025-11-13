import Image from "next/image";

export default function RadiatingAvatar() {
    return (
        < div className="flex flex-col items-center justify-center w-64 h-64 rounded-full bg-[#727273d1]" >
            <div className="w-56 h-56 rounded-full bg-[#4f4f50]">
                <div className="relative top-4 left-4 w-48 h-48 rounded-full bg-[#37393b] ">
                    <Image
                        src={"/Profile-pic.png"}
                        width={160}
                        height={160}
                        alt={"Profile-pic"}
                        className="rounded-full relative top-4 left-4 z-10"
                    />
                </div>
            </div>
        </div >
    );
}