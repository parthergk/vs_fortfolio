import { useSideBarContext } from "@/context/SideBarProvider";
import Explore from "../ActivCompon/Explore";
import SourceControl from "../ActivCompon/SourceControl";
import Extension from "../ActivCompon/Extension";
import { useEffect } from "react";

const SideBar = () => {
  const itemContext = useSideBarContext();

  useEffect(() => {
    const handleResize = () => {
      // Automatically close if screen width is below 640px
      if (window.innerWidth < 640) {
        itemContext.setSideOpen(false);
      }
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const items = [
    { name: "explore", component: <Explore folderName="PORTFOLIO" /> },
    { name: "source Control", component: <SourceControl folderName="MISSION CONTROL"/> },
    { name: "extension", component: <Extension folderName="SKILLS" /> },
  ];

  const activeItem = items.find((item) => item.name === itemContext.sideBarItem);

  return (
    <div className={`${itemContext.sideOpen ?  'block' : 'hidden'} w-44 border-r border-neutral-800 flex flex-col justify-start py-3`}>
      {/* Sidebar Header */}
      <span className="px-5 text-sm">
        {itemContext.sideBarItem.toUpperCase()}
      </span>

      {/* Active Component */}
      <div className="px-1 w-full h-full mt-2">
        
        {activeItem ? activeItem.component : null}
      </div>
    </div>
  );
};

export default SideBar;
