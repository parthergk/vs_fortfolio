import React, { createContext, useContext, useState } from "react";

interface SideContextItem {
  sideBarItem: string;
  setSideBarItem: (item: string) => void;
}

interface ItemProviderProps {
  children: React.ReactNode;
}

const SideBarContext = createContext<SideContextItem | undefined>(undefined);

const SideBarProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [sideBarItem, setSideBarItem] = useState<string>("explore");

  return (
    <SideBarContext.Provider value={{ sideBarItem, setSideBarItem }}>
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
