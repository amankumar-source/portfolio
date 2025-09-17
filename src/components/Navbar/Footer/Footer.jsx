import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaCodepen,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Aman Kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4">
          {[
            { name: "Home", id: "home" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Certifications", id: "certifications" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-8 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/aman-kumar-96806030a",
            },
            { icon: <FaGithub />, link: "https://github.com/amankumar-source" },
            {
              icon: <FaStackOverflow />,
              link: "https://stackoverflow.com/users/31342913/aman-singh ",
            },
            {
              icon: <FaCodepen />,
              link: "https://codepen.io/amankumar-source",
            },
            { icon: <FaTwitter />, link: "https://x.com/AmanSingh114510" },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/channel/UC-AVgwduT7F0wPVtpzYdeuQ",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Aman Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
