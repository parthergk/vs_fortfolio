import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className=" h-12 px-3 border-b bg-customBlack flex items-center justify-between border-neutral-800">
      <Image alt="img" src="/image/vsIcon.png" width={20} height={20} />
      <div className=" w-60 sm:w-96 text-center border border-neutral-700 bg-neutral-800 rounded-md">
        <span className=" text-sm">Full Stack Developer</span>
      </div>
      <X className=" w-5 h-5 " />
    </div>
  );
};

export default TopBar;
