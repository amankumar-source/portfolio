import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaCodepen,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Static data outside component — no re-creation per render
const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-96806030a" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/amankumar-source" },
  { icon: <FaStackOverflow />, label: "Stack Overflow", href: "https://stackoverflow.com/users/31342913/aman-singh" },
  { icon: <FaCodepen />, label: "CodePen", href: "https://codepen.io/amankumar-source" },
  { icon: <FaTwitter />, label: "Twitter / X", href: "https://x.com/AmanSingh114510" },
  { icon: <FaYoutube />, label: "YouTube", href: "https://www.youtube.com/channel/UC-AVgwduT7F0wPVtpzYdeuQ" },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-6 md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <p className="text-xl font-semibold text-purple-500">Aman Kumar</p>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-6" aria-label="Social media links">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; 2025 Aman Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
