"use client";

import { Blocks, CircleUserRound, Files, Settings } from "lucide-react";
import React, { useState } from "react";

const tabs = [
  { id: "explore", icon: Files },
  {
    id: "sourceControl",
    icon: () => (
      <svg
        className="w-[27px] h-[27px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" />
      </svg>
    ),
  },
  { id: "extension", icon: Blocks },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("explore");

  return (
    <div className="w-12 h-full flex flex-col items-center justify-between space-y-2 border-r border-neutral-800">
        
        <div className=" w-full">
      {tabs.map(({ id, icon: Icon }) => (
        <div
          key={id}
          className={`w-full h-12 py-2 flex justify-center items-center ${
            activeTab === id ? "border-l-2 text-white" : "border-0"
          } border-blue-600 text-neutral-500 hover:text-white cursor-pointer`}
          onClick={() => setActiveTab(id)}
        >
          <Icon className="w-6 h-6" />
        </div>
      ))}
      </div>

        <div className="w-full py-4 space-y-8 flex flex-col justify-center items-center ">
            <CircleUserRound className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer"/>
            <Settings className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer"/>
        </div>
    </div>
  );
};

export default SideBar;
