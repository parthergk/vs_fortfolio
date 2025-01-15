import React, { createContext, ReactNode, useContext, useState } from "react";

interface portfolioItemInter {
    portfolioItem: string;
    setPortfolioItem: (name:string) => void
}

interface providerProInter{
    children: ReactNode;
}

const PortfolioContext = createContext<portfolioItemInter | undefined>(undefined);

export const PortfolioProvider: React.FC<providerProInter> = ({children})=>{
    const [portfolioItem, setPortfolioItem] = useState<string>("home");

    return(
    <PortfolioContext.Provider value={{portfolioItem, setPortfolioItem}}>
        {children}
    </PortfolioContext.Provider>
    )
}


export const usePortContext = ()=>{
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error("usePortContext must be used within a PortfolioProvider");
      }
    return context;
}