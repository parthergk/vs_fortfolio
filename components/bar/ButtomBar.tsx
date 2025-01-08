import { Braces, CheckCheck } from "lucide-react";
import React from "react";

const ButtomBar = () => {
  return (
    <div className=" w-full h-6 flex justify-between items-center border-t border-neutral-800">
      <div className=" px-10 flex justify-center items-center space-x-2">
        <svg
          className="w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" />
        </svg>
        <span className=" font-thin text-sm">main*</span>
      </div>

      <div className="flex space-x-4 justify-center items-center px-3 ">
        {[
          { icon: Braces, label: "TypeScript JSX" },
          { icon: CheckCheck, label: "Prettier" },
        ].map(({ icon: Icon, label }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon className="w-4 h-4" />
            <span className="font-thin text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtomBar;
