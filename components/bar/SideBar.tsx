import { useSideBarContext } from "@/context/SideBarProvider";
import Explore from "../ActivCompon/Explore";
import SourceControl from "../ActivCompon/SourceControl";
import Extension from "../ActivCompon/Extension";

const SideBar = () => {
  const itemContext = useSideBarContext();

  const items = [
    { name: "explore", component: <Explore folderName="PORTFOLIO" /> },
    { name: "source Control", component: <SourceControl folderName="MISSION CONTROL"/> },
    { name: "extension", component: <Extension folderName="SKILLS" /> },
  ];

  const activeItem = items.find(
    (item) => item.name === itemContext.sideBarItem
  );

  return (
    <div className="w-44 border-r border-neutral-800 flex flex-col justify-start py-3">
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
