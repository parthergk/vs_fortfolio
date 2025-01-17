import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HomePage = () => {
  const personalInfo = {
    name: "John Developer",
    title: "Full Stack Developer",
    shortBio: "Crafting digital experiences with code and creativity",
    location: "San Francisco, CA",
    resumeLink: "/path-to-resume.pdf",
    github: "https://github.com/johndeveloper",
    linkedin: "https://linkedin.com/in/johndeveloper",
    email: "john@example.com"
  };

  const skills = ["React", "Node.js", "TypeScript", "Next.js", "MongoDB"];

  return (
    <div className="w-full min-h-screen bg-[#1f1f1f] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 max-w-3xl">
          {/* Greeting */}
          <div className="inline-block">
            <div className="flex items-center gap-2 text-purple-400 bg-purple-400/10 px-3 py-1 rounded-sm text-sm">
              <span className="animate-wave">👋</span>
              <span>Welcome to my portfolio</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Hi, I&apos;m {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-purple-400 font-semibold">
              {personalInfo.title}
            </h2>
            <p className="text-xl text-gray-400">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Location */}
          <p className="text-gray-400 flex items-center gap-2">
            📍 Based in {personalInfo.location}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-[#2a2a2a] text-gray-300 rounded-sm border border-purple-500/15 hover:shadow hover:shadow-purple-400 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-sm transition-colors duration-200"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={personalInfo.resumeLink}
              className="inline-flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333333] text-white px-6 py-3 rounded-sm transition-colors duration-200 border border-purple-500/15"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Optional: Background Elements */}
        <div className="fixed top-0 right-0 w-1/3 h-screen bg-purple-600/5 blur-3xl pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default HomePage;