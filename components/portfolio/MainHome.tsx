import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainHome = () => {
  return (
    <div className=" bg-customBlackSec w-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 p-3 ">
      {/* Name Section */}
      <div className="pl-8 md:pl-20 flex justify-center md:justify-start items-end">
        <h1 className="text-6xl md:text-7xl font-medium md:font-bold tracking-tight">
          Parther
        </h1>
      </div>

      {/* Image Container */}
      <div className="flex justify-center items-center row-span-2 relative">
        <div className=" w-48 h-60 md:w-64 md:h-96  relative md:-left-4 -left-2 bottom-2 md:bottom-4 z-10 bg-neutral-500 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500">
        <Image alt='me' src="/image/img/img.JPG" width={1851} height={2177} className=" w-full h-full object-cover"/>
        </div>
        <div className="w-48 h-60 md:w-64 md:h-96 border-2 absolute ">
          
        </div>
      </div>

      {/* Description Section */}
      <div className="pl-0 sm:pl-8 md:pl-20 flex gap-2 justify-center">
        <div className="w-8 border-t-2 h-0 mt-4 hidden md:block"></div>
        <div className="max-w-md flex flex-col">
          <h2 className="inline text-lg md:text-xl font-bold mb-1 md:mb-2 ">
            Frontend Developer
          </h2>
          <p className=" text-base md:text-lg leading-normal md:leading-relaxed">
            With knowledge in web development and design, I offer the best
            projects resulting in quality work.
          </p>
          <p className="text-gray-400 flex items-center gap-2 mt-2">
            Based in Bijnor, UP
          </p>
          <Link
          target="_blank"
            href="https://drive.google.com/file/d/1d68DotlWFNc_7x2rrGfSl2RpDTRvFmy6/view?usp=drive_link"
            className="self-start md:self-end mt-5  inline-flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333333] text-white px-6 py-1 rounded-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md hover:shadow-purple-400  border border-purple-500/15"
          >
            Download CV
            <Download size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
