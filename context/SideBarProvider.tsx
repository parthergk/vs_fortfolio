import React, { createContext, useContext, useState } from "react";

interface SideContextItem {
  sideBarItem: string;
  sideOpen: boolean;
  setSideBarItem: (item: string) => void;
  setSideOpen: (item: boolean | ((prev: boolean) => boolean)) => void;
}

interface ItemProviderProps {
  children: React.ReactNode;
}

const SideBarContext = createContext<SideContextItem | undefined>(undefined);

const SideBarProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [sideBarItem, setSideBarItem] = useState<string>("explore");
  const [sideOpen, setSideOpen] = useState<boolean>(true)

  return (
    <SideBarContext.Provider value={{ sideBarItem, setSideBarItem, sideOpen, setSideOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

const useSideBarContext = (): SideContextItem => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSideBarContext must be used within a SideBarProvider");
  }
  return context;
};

export { SideBarProvider, useSideBarContext };
