import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiGraphql, SiWebpack, SiVite } from "react-icons/si";

interface MyComponentProps {
  folderName: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Extension: React.FC<MyComponentProps> = ({ folderName }) => {
  const [isOpen, setIsOpen] = useState(true);

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-500" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGit className="text-red-500" /> },
        { name: "Webpack", icon: <SiWebpack className="text-blue-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
    },
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
            <ChevronDown className="w-[18px] h-[18px]" />
          ):(
            <ChevronRight className="w-[18px] h-[18px]" />
          )}
        </span>
        <span className="text-sm font-bold">{folderName}</span>
      </div>

      {/* Skill Categories */}
      {isOpen && (
        <div className="pl-5 space-y-3">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-1">
              {/* Category Name */}
              <span className="text-sm font-semibold">{category.category}</span>
              {/* Skills with Icons */}
              <div className="space-y-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-sm text-neutral-400"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
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

export default Extension;
