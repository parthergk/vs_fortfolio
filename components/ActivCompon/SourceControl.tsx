import { Check, ChevronDown, ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import { FaHtml5, FaJs, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

interface MyComponentProps {
  folderName: string;
}

interface Project {
  name: string;
  icon: React.ReactNode;
}

const SourceControl: React.FC<MyComponentProps> = ({ folderName }) => {
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([
    { name: "thumbnail", icon: <FaReact className="text-blue-400" /> },
  ]);

  const [pendingProjects, setPendingProjects] = useState<Project[]>([
    { name: "blog", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "portfolio", icon: <FaJs className="text-yellow-500" /> },
  ]);

  const [completedProjects, setCompletedProjects] = useState<Project[]>([
    { name: "ecommerce", icon: <SiNextdotjs className="text-gray-500" /> },
    { name: "landing-page", icon: <FaCss3Alt className="text-blue-500" />},
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

  return (
    <div className="flex flex-col space-y-3">
      {/* Toggle Header */}
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>
                {isOpen ? (
                  <ChevronDown className="w-[18px] h-[18px]" />
                ):(
                  <ChevronRight className="w-[18px] h-[18px]" />
                )}
              </span>
              <span className="text-sm font-bold">{folderName}</span>
            </div>

      {/* Content */}
      {isOpen && (
        <div className="flex flex-col pl-4 pr-2 space-y-4">
          {/* Add New Project */}
          
          <div className="flex flex-col px-1 gap-2">
            <input
              type="text"
              placeholder="Add new project..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-neutral-700 text-gray-200 placeholder-gray-400 text-sm px-2 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAdd}
              className="flex items-center justify-center gap-1 bg-blue-600 text-white text-sm px-2 py-1 rounded-sm hover:bg-blue-500"
            >
              <Check className="h-4 w-4" />
              Add
            </button>
          </div>

          {/* Project Lists */}
          {[
            { title: "On Going", projects: ongoingProjects, onAction: moveToPending },
            { title: "Pending", projects: pendingProjects, onAction: moveToCompleted },
            { title: "Completed", projects: completedProjects },
          ].map(({ title, projects, onAction }) => (
            <div key={title}>
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold  text-gray-300">{title}</span>
              </div>
              <div className="pl-4 space-y-2">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center gap-2 px-2 py-1 bg-neutral-800 rounded-sm hover:bg-neutral-700"
                  >
                    {/* <Image
                      alt={project.name}
                      src={project.icon}
                      height={16}
                      width={16}
                      className="rounded-full"
                    /> */}
                    {project.icon}
                    <span
                      className="text-sm text-gray-300 truncate max-w-[150px]"
                      title={project.name}
                    >
                      {project.name}.tsx
                    </span>
                    {onAction && (
                      <Plus
                        className="w-4 h-4 text-gray-400 hover:text-gray-200 ml-auto cursor-pointer"
                        onClick={() => onAction(project)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SourceControl;
