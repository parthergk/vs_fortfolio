import ButtomBar from "@/components/bar/ButtomBar";
import SideBar from "@/components/bar/SideBar";
import TopBar from "@/components/bar/TopBar";

export default function Home() {
  return (
    <div className="h-screen w-full bg-customBlack text-neutral-300 flex flex-col">
      {/* Top Bar */}
      <TopBar />
      <SideBar/>
      <ButtomBar/>
    </div>
  );
}
