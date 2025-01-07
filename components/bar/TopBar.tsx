'use client'
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
    function handleClose (){
        window.close();
    }
  return (
    <div className=" h-12 px-3 border-b bg-customBlack flex items-center justify-between border-neutral-800">
      <Link href='/'>
      <Image alt="img" src="/image/vsIcon.png" width={20} height={20} />
      </Link>
      <div className=" w-60 sm:w-96 text-center border border-neutral-700 bg-neutral-800 rounded-md">
        <span className=" text-sm">Full Stack Developer</span>
      </div>
      <div className=" p-1 cursor-pointer" onClick={handleClose}>
        <X className=" w-5 h-5 " />
      </div>
    </div>
  );
};

export default TopBar;
