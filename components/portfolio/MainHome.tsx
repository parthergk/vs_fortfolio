import React from "react";

const MainHome = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 p-3 md:p-5">
      {/* Name Section */}
      <div className="pl-8 md:pl-20 flex justify-center md:justify-start items-end">
        <h1 className="text-5xl md:text-7xl font-medium md:font-bold tracking-tight">
          Parther
        </h1>
      </div>

      {/* Image Container */}
      <div className="flex justify-center items-center row-span-2 relative">
        <div className=" w-44 h-60 md:w-64 md:h-96 border-2 relative md:-left-4 -left-2 bottom-2 md:bottom-4 z-10 bg-neutral-500 transition-all duration-300 hover:scale-105"></div>
        <div className="w-44 h-60 md:w-64 md:h-96 border-2 absolute "></div>
      </div>

      {/* Description Section */}
      <div className="pl-0 sm:pl-8 md:pl-20 flex gap-2 justify-center">
        <div className="w-8 border-t-2 h-0 mt-4 hidden md:block"></div>
        <div className="max-w-md">
          <h2 className=" text-lg md:text-xl font-bold mb-1 md:mb-2">
            Frontend Developer
          </h2>
          <p className=" text-base md:text-lg leading-normal md:leading-relaxed">
            With knowledge in web development and design, I offer the best projects
            resulting in quality work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;