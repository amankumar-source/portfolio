import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // ✅ Smooth scroll when clicking nav item
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-10 md:px-20 bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center py-5 text-white">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          Portfolio
          <span className="text-[#8245ec]">&gt;</span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium ml-auto">
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("experience")}
          >
            Experience
          </li>
          
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("certifications")}
          >
            Certifications
          </li>
          <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Social Icons (desktop always visible) */}
        <div className="hidden md:flex items-center gap-5 ml-10">
          
          <a
            href="http://www.linkedin.com/in/aman-kumar-96806030a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#8245ec] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/amankumar-source"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#8245ec] transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* Social Icons in mobile top bar */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-[#8245ec] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-[#8245ec] transition"
          >
            <FaLinkedin />
          </a>

          {/* Menu toggle */}
          {menu ? (
            <RiCloseLine
              size={30}
              className="text-[#8245ec] cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="text-[#8245ec] cursor-pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300 font-medium">
            <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
            
            <li
              className="cursor-pointer hover:text-[#8245ec]"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-[#8245ec]"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-[#8245ec]"
              onClick={() => handleScroll("experience")}
            >
              Experience
            </li>
            <li
            className="cursor-pointer hover:text-[#8245ec] transition"
            onClick={() => handleScroll("certifications")}
          >
            Certifications
          </li>
            <li
              className="cursor-pointer hover:text-[#8245ec]"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

