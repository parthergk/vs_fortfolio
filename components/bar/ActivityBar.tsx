"use client";

import { useSideBarContext } from "@/context/SideBarProvider";
import { Blocks, CircleUserRound, Files, Settings } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import DevCard from "../card/DevCard";

interface Tab {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const tabs: Tab[] = [
  { id: "explore", icon: Files },
  {
    id: "source Control",
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

const ActivityBar: React.FC = () => {
  const itemContext = useSideBarContext();

  const [showDevCard, setShowDevCard] = useState(false); // State to track visibility
  const devCardRef = useRef<HTMLDivElement | null>(null);  // Ref for DevCard
  const circleButtonRef = useRef<SVGSVGElement | null>(null);  // Ref for CircleUserRound button

  const toggleDevCard = () => {
    setShowDevCard((prev) => !prev); // Toggle the visibility of the DevCard
  };

  useEffect(() => {
    // Function to handle click outside the DevCard and button
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is outside of the DevCard and CircleUserRound button, hide the card
      if (
        devCardRef.current &&
        !devCardRef.current.contains(event.target as Node) &&
        circleButtonRef.current &&
        !circleButtonRef.current.contains(event.target as Node)
      ) {
        setShowDevCard(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures it runs only on mount and unmount

  function handleClick(id: string) {
    if (id === itemContext.sideBarItem) {
      itemContext.setSideOpen((prev) => !prev);
    } else {
      itemContext.setSideBarItem(id);
      itemContext.setSideOpen(true);
    }
  }

  return (
    <div className="w-12 h-full flex flex-col items-center justify-between space-y-2 border-r border-neutral-800">
      <div className="w-full">
        {tabs.map(({ id, icon: Icon }) => (
          <div
            key={id}
            className={`w-full h-12 py-2 flex justify-center items-center ${
              itemContext.sideBarItem === id
                ? "border-l-2 text-white"
                : "border-0"
            } border-blue-600 text-neutral-500 hover:text-white cursor-pointer`}
            onClick={() => handleClick(id)}
          >
            <Icon className="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="w-full py-4 space-y-6 flex flex-col justify-center items-center">
        <CircleUserRound
          ref={circleButtonRef}  // Add ref to the CircleUserRound button
          className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer"
          onClick={toggleDevCard}  // Toggle DevCard visibility on click
        />
        <Settings className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer" />

        {/* Conditionally render the DevCard based on the state */}
        {showDevCard && <DevCard devref={devCardRef} />}
      </div>
    </div>
  );
};

export default ActivityBar;
