import HoverCard from "@/ui-components/HoverCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-8 pb-20 sm:p-50">
      <HoverCard
        text={"Hi there!"}
        color2={"#c77dff"}
        color1={"#3c096c"}
      />
    </div>
  );
}
