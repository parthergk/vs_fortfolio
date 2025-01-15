import { usePortContext } from "@/context/PortfolioProvider";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface MyComponentProps {
  folderName: string;
}

const Explore: React.FC<MyComponentProps> = ({ folderName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const portContext = usePortContext();

  const files = [
    { name: "home.html", icon: "/image/icons/html_icon.svg", alt: "HTML" },
    { name: "project.js", icon: "/image/icons/js_icon.svg", alt: "JavaScript" },
    { name: "about.jsx", icon: "/image/icons/react_icon.svg", alt: "React" },
  ];

  return (
    <div className="flex flex-col space-y-1">
      {/* Toggle Header */}
      <div
        className="cursor-pointer flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {isOpen ? (
            <ChevronRight className="w-[18px] h-[18px]" />
          ) : (
            <ChevronDown className="w-[18px] h-[18px]" />
          )}
        </span>
        <span className="text-sm font-bold">{folderName}</span>
      </div>

      {/* Files Section */}
      {!isOpen && (
        <div className="pl-5 space-y-1">
          {files.map((file) => (
            <div
              key={file.name}
              onClick={() => portContext.setPortfolioItem(file.name)}
              className={`flex gap-1 items-center cursor-pointer ${file.name === portContext.portfolioItem && 'bg-neutral-800'} hover:bg-neutral-700`}
            >
              <Image alt={file.alt} src={file.icon} height={18} width={18} />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
