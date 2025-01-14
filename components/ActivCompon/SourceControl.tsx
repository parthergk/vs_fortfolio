import { Check, ChevronDown, ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

interface MyComponentProps {
  folderName: string;
}

interface Project {
  name: string;
  icon: string;
}

const SourceControl: React.FC<MyComponentProps> = ({ folderName }) => {
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([
    { name: "thumbnail", icon: "/image/icons/react_icon.svg" },
  ]);

  const [pendingProjects, setPendingProjects] = useState<Project[]>([
    { name: "blog", icon: "/image/icons/html_icon.svg" },
    { name: "portfolio", icon: "/image/icons/js_icon.svg" },
  ]);

  const [completedProjects, setCompletedProjects] = useState<Project[]>([
    { name: "ecommerce", icon: "/image/icons/react_icon.svg" },
    { name: "landing-page", icon: "/image/icons/js_icon.svg" },
  ]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      setOngoingProjects([
        ...ongoingProjects,
        { name: input.trim(), icon: "/image/icons/react_icon.svg" },
      ]);
      setInput("");
    }
  };

  const moveToPending = (project: Project) => {
    setOngoingProjects(ongoingProjects.filter((p) => p !== project));
    setPendingProjects([...pendingProjects, project]);
  };

  const moveToCompleted = (project: Project) => {
    setPendingProjects(pendingProjects.filter((p) => p !== project));
    setCompletedProjects([...completedProjects, project]);
  };

  // UI remains unchanged


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

      {
        isOpen ? null :
      <div className="flex flex-col pl-5 pr-1 space-y-2">
        <input
          type="text"
          placeholder="Add new project..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-neutral-700 placeholder-neutral-500 placeholder:font-bold placeholder:text-sm outline-none px-1 border border-neutral-700 focus:border-blue-600 focus:border-1 rounded-sm"
        />
        <button
          onClick={handleAdd}
          className="font-medium bg-blue-500 outline-none rounded-sm h-7 flex justify-center items-center"
        >
          <Check className="h-5 w-5" />
          Add
        </button>

        {/* Ongoing Projects */}
        <div>
          <div className="cursor-pointer flex items-center gap-1">
            <ChevronDown className="w-[18px] h-[18px]" />
            <span className="text-sm font-bold">On Going</span>
          </div>
          <div className="pl-5 space-y-1">
            {ongoingProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center gap-1 hover:bg-neutral-800 p-1 rounded cursor-pointer"
              >
                <Image alt={project.name} src={project.icon} height={16} width={16} />
                <span
                  className="text-sm truncate max-w-[150px] hover:overflow-visible hover:whitespace-normal"
                  title={project.name}
                >
                  {project.name}.tsx
                </span>
                <Plus
                  className="w-[16px] h-[16px] text-gray-400 hover:text-gray-200 ml-auto"
                  onClick={() => moveToPending(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pending Projects */}
        <div>
          <div className="cursor-pointer flex items-center gap-1">
            <ChevronDown className="w-[18px] h-[18px]" />
            <span className="text-sm font-bold">Pending</span>
          </div>
          <div className="pl-5 space-y-1">
            {pendingProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center gap-1 hover:bg-neutral-800 p-1 rounded cursor-pointer"
              >
                <Image alt={project.name} src={project.icon} height={16} width={16} />
                <span
                  className="text-sm truncate max-w-[150px] hover:overflow-visible hover:whitespace-normal"
                  title={project.name}
                >
                  {project.name}.tsx
                </span>
                <Plus
                  className="w-[16px] h-[16px] text-gray-400 hover:text-gray-200 ml-auto"
                  onClick={() => moveToCompleted(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <div className="cursor-pointer flex items-center gap-1">
            <ChevronDown className="w-[18px] h-[18px]" />
            <span className="text-sm font-bold">Completed</span>
          </div>
          <div className="pl-5 space-y-1">
            {completedProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center gap-1 hover:bg-neutral-800 p-1 rounded"
              >
                <Image alt={project.name} src={project.icon} height={16} width={16} />
                <span
                  className="text-sm truncate max-w-[150px] hover:overflow-visible hover:whitespace-normal"
                  title={project.name}
                >
                  {project.name}.tsx
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

          }
    </div>
  );
};

export default SourceControl;
