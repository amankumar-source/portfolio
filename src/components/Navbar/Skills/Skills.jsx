import Tilt from "react-parallax-tilt";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import IntelliJLogo from "../../../assets/int.png.png";
import JavaLogo from "../../../assets/java.png";
import VSCodeLogo from "../../../assets/icons8-visual-studio-code-48.png";
import FirebaseLogo from "../../../assets/icons8-firebase-24.png";
import PythonLogo from "../../../assets/python.png";

// ✅ Skills data with react-icons
const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: (
          <img src={JavaLogo} alt="Java" className="w-6 h-6 sm:w-8 sm:h-8" />
        ),
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Python",
        icon: (
          <img
            src={PythonLogo}
            alt="Python"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        ),
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="text-[#4479A1] w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Firebase",
        icon: (
          <img
            src={FirebaseLogo}
            alt="Firebase"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        ),
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "VS Code",
        icon: (
          <img
            src={VSCodeLogo}
            alt="VS Code"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        ),
      },
      {
        name: "Vercel",
        icon: <SiVercel className="text-black w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-[#00C7B7] w-6 h-6 sm:w-8 sm:h-8" />,
      },
      {
        name: "IntelliJ IDEA",
        icon: (
          <img
            src={IntelliJLogo}
            alt="IntelliJ IDEA"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        ),
      },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories in 4 equal cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/70 backdrop-blur-md px-6 py-8 rounded-2xl border-2 border-white/20 
          shadow-lg hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
          >
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center border border-white/20 
                  rounded-xl py-4 hover:border-[#8245ec] hover:scale-105 transition duration-300"
                >
                  {skill.icon}
                  <span className="mt-2 text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
