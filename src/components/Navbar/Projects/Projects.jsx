import React from "react";
import ProjectCard from "./ProjectCard";
import blogImg from "../../../assets/project1.png";
import jobImg from "../../../assets/job.png";
import ClarityImg from "../../../assets/clarity.png";
import ToyVerseImg from "../../../assets/toy.png";
import AiImg from "../../../assets/banner.png";

const ProjectsInfo = [
  {
    title: "Real-Time Collaborative Code Editor",
    description:
      "A web application that enables multiple users to code together live.",
    tags: [
      "React",
      "WebSocket",
      "Express.js",
      "React MonacoEditor",
      "TailwindCss",
      "Render Cloud platform",
    ],
    demoLink: "https://realtime-code-editor-run.onrender.com",
    codeLink: "https://github.com/amankumar-source/realtime-code-editor-run",
    image: blogImg,
  },
  {
    title: "Job Board and Recruitment Management System",
    description:
      "Fullstack Job Portal App using MERN stack for efficient job searching and recruitment.",
    tags: [
      "React",
      "Shadcn-ui",
      "Nodejs",
      "MongoDB",
      "Tailwindcss",
      "Express",
      "Redux",
    ],
    demoLink: "https://job-board-recruitment-system.vercel.app",
    codeLink: "https://github.com/amankumar-source/JobBoard-Recruitment-System",
    image: jobImg,
  },
  {
    title: "Clarity AI",
    description:
      "An AI-powered web app that converts overthinking and complex thoughts into a single clear, actionable sentence using modern LLMs.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Railway",
      "Vercel",
      "LLM API",
    ],
    demoLink: "https://clarityai-app.vercel.app",
    codeLink: "https://github.com/amankumar-source/Clarity-AI-",
    image: ClarityImg,
  },
  {
  title: "ToyVerse",
  description:
    "A motion-first interactive toy e-commerce platform built with React, featuring physics-based animations, custom cursor interactions, animated toy visuals, and engaging mini-games for an immersive user experience",
  tags: [
    "React",
    "Vite",
    "GSAP",
    "Framer Motion",
    "Three.js",
    "React Three Fiber",
    "Web Animations",
    "UI/UX Design",
    "Performance Optimization",
  ],
  demoLink: "https://toy-verse-alpha.vercel.app/",
  codeLink: "https://github.com/amankumar-source/ToyVerse",
  image: ToyVerseImg,
},
  {
    title: "AI Workflow Orchestration Platform",
    description:
      "An enterprise-grade platform for designing, executing, and monitoring AI-powered workflows, leveraging LLMs, background job processing, and real-time system observability",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "LLM APIs",
      "CI/CD",
      "System Design",
    ],
    demoLink: "#",
    codeLink: "#",
    image: AiImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A selection of projects I have worked on showcasing my skills and
          creativity
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsInfo.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
