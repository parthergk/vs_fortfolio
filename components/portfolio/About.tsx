import React from 'react';
import { Mail, Linkedin, Github, Terminal, Coffee, Globe } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  // const skills = [
  //   { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
  //   { category: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
  //   { category: "Tools & Others", techs: ["Git", "Docker", "AWS", "Jest", "Figma"] }
  // ];

  const personalInfo = {
    name: "Parther Developer",
    title: "Frontend Developer",
    location: "Bijnor, UP",
    experience: "0+ years",
    email: "parthergk@gmail.com",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-b5a76626b",
    github: "https://github.com/parthergk"
  };

  return (
    <div className="w-full h-full bg-customBlackSec p-3 md:p-8 overflow-y-scroll no-scrollbar">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Hi, I&apos;m {personalInfo.name} 👋
          </h1>
          <h2 className="text-xl sm:text-2xl text-purple-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            Passionate developer with {personalInfo.experience} of experience building scalable web applications. 
            I specialize in creating user-centric solutions that combine clean code with excellent user experience.
            Currently based in {personalInfo.location}, working on innovative projects that push the boundaries of web technology.
          </p>
        </div>

        {/* Skills Section */}
        {/* <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Code2 className="text-purple-400" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-[#2a2a2a] rounded-sm p-4 border border-purple-500/15">
                <h4 className="text-lg text-purple-400 mb-4">{skillSet.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillSet.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-[#333333] text-gray-300 rounded-sm hover:shadow hover:shadow-purple-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* What I Do Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Terminal className="text-purple-400" />
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] rounded-sm p-4 border border-purple-500/15 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md hover:shadow-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="text-purple-400 " />
                <h4 className="text-lg text-white">Web Development</h4>
              </div>
              <p className="text-sm text-gray-300">
                Building responsive, performant web applications with modern technologies and best practices.
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-4 border border-purple-500/15 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md hover:shadow-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="text-purple-400" />
                <h4 className="text-lg text-white">Problem Solving</h4>
              </div>
              <p className="text-sm text-gray-300">
                Transforming complex problems into simple, elegant solutions through creative thinking and coding.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Mail className="text-purple-400" />
            Get In Touch
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              <Mail size={18} />
              <span className="text-sm">{personalInfo.email}</span>
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;