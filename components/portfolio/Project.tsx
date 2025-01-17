import React from 'react'
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const Project = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js, featuring real-time data synchronization and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/username/project-one",
      live: "https://project-one.demo",
    },
    {
      title: "Project Two",
      description: "An AI-powered analytics dashboard that helps businesses track and visualize their key performance metrics.",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      github: "https://github.com/username/project-two",
      live: "https://project-two.demo",
    },
    {
      title: "Project Three",
      description: "A mobile-first e-commerce platform with seamless payment integration and user authentication.",
      tech: ["Next.js", "Stripe", "Firebase", "Tailwind"],
      github: "https://github.com/username/project-three",
      live: "https://project-three.demo",
    }
  ];
  return (
    <div className="w-full bg-customBlackSec p-3 md:p-8 overflow-y-scroll no-scrollbar">
      <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#2a2a2a] rounded-sm p-4 sm:p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md hover:shadow-purple-400 border border-purple-500/15 cursor-pointer min-h-[200px] md:min-h-[280px]"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-12 sm:my-6">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-[#333333] text-gray-300 rounded-sm hover:shadow hover:shadow-orange-400 hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 sm:gap-4 absolute bottom-4 sm:bottom-5">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-purple-400  transition-colors duration-200"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">Code</span>
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-purple-400  transition-colors duration-200"
              >
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">Live Demo</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project