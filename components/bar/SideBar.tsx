import { useSideBarContext } from "@/context/SideBarProvider"

const SideBar = () => {
    const itemConext = useSideBarContext();

  return (
    <div className=' w-44 border-r border-neutral-800 flex justify-center'>{itemConext.sideBarItem}</div>
  )
}

export default SideBar