"use client";
import BottomBar from "@/components/bar/BottomBar";
import ActivityBar from "@/components/bar/ActivityBar";
import TopBar from "@/components/bar/TopBar";
import SideBar from "@/components/bar/SideBar";
import { SideBarProvider } from "@/context/SideBarProvider";

export default function Home() {

  return (
    <SideBarProvider>
      <div className="h-screen w-full bg-customBlack text-neutral-300 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/*Left side bars */}
        <div className=" flex h-full">
          <ActivityBar />
          <SideBar />
        </div>

        {/*Bottom Bar */}
        <BottomBar />
      </div>
    </SideBarProvider>
  );
}
