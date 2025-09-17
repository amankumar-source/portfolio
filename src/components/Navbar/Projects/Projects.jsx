import React from "react";
import ProjectCard from "./ProjectCard";
import blogImg from "../../../assets/pro.png"; // replace with actual images
import ytImg from "../../../assets/banner.png";
import newsImg from "../../../assets/banner.png";
import ecommerceImg from "../../../assets/banner.png";

const ProjectsInfo = [
  {
    title: "AI-Powered Real-Time Collaborative Code Editor",
    description:
      "A web application that enables multiple users to code together live, with instant synchronization, multi-language support, live code execution, and runtime input handling, enhancing teamwork and developer productivity.",
    tags: [
      "React",
      "Node.js",
      "WebSocket",
      "React Monaco Editor",
      "Express.js",
      "Piston API",
      "Render Cloud platform",
    ],
    demoLink: "https://realtime-code-editor-run.onrender.com",
    codeLink: "https://github.com/amankumar-source/realtime-code-editor-run",
    image: blogImg,
  },
  {
    title: "YouTube Clone",
    description:
      "A video streaming app inspired by YouTube, using React and RapidAPI.",
    tags: ["React", "RapidAPI", "Tailwind", "VideoJS"],
    demoLink: "#",
    codeLink: "#",
    image: ytImg,
  },
  {
    title: "News Website",
    description:
      "A news aggregator built with React and NewsAPI to fetch live articles.",
    tags: ["React", "NewsAPI", "Tailwind", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
    image: newsImg,
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
