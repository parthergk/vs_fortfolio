"use client";
import BottomBar from "@/components/bar/BottomBar";
import ActivityBar from "@/components/bar/ActivityBar";
import TopBar from "@/components/bar/TopBar";
import SideBar from "@/components/bar/SideBar";
import { SideBarProvider } from "@/context/SideBarProvider";
import MainHome from "@/components/portfolio/MainHome";
import { usePortContext } from "@/context/PortfolioProvider";
import Project from "@/components/portfolio/Project";
import About from "@/components/portfolio/About";
import TerminalBar from "@/components/bar/TerminalBar";
import { useState } from "react";

export default function Home() {
  const portContext = usePortContext();
  const [onTerminal, setOnTerminal] = useState<boolean>(false);

  const items = [
    {name: 'home',  component: <MainHome/>},
    {name: 'project', component: <Project/>},
    {name: 'about', component: <About/>},
  ]

  const activeComp = items.find((item)=> item.name === portContext.portfolioItem.split('.')[0])

  return (
    <SideBarProvider>
      <div className="h-screen w-full bg-customBlackPri text-neutral-300 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/*Left side bars */}
        <div className=" flex h-full overflow-y-hidden">
          <ActivityBar setOnTerminal= {setOnTerminal} />
          <SideBar />
          <div className=" w-full h-full relative overflow-hidden">
          {onTerminal && <TerminalBar setOnTerminal={setOnTerminal} />}
          {activeComp?.component}
          </div>
        </div>

        {/*Bottom Bar */}
        <BottomBar />
      </div>
    </SideBarProvider>
  );
}
