import React, { useState, useCallback } from "react";
import certificate from "../../assets/intern.png";
import eygdsLogo from "../../assets/ey.png";
import aicteLogo from "../../assets/aicte.png";

// Moved outside component: static data — no reason to re-create on every render
const EXPERIENCE = {
  role: "Web Development Intern",
  company: "EY GDS & AICTE – Next Gen Employability Program",
  date: "Dec 2024 - Jan 2025 (6 weeks)",
  desc: [
    "Built Web applications using the MERN Stack",
    "Created responsive UI with React and Tailwind CSS",
    "Connected frontend to backend using REST APIs",
    "Used MongoDB Atlas for database integration",
    "Learned Git, project deployment, and team collaboration",
  ],
  skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "MERN Stack"],
};

const Experience = () => {
  const [showCert, setShowCert] = useState(false);

  const openCert = useCallback(() => setShowCert(true), []);
  const closeCert = useCallback(() => setShowCert(false), []);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 font-sans w-full overflow-hidden">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">EXPERIENCE</h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-lg md:max-w-2xl w-full mx-auto p-5 md:p-8 bg-gray-800 bg-opacity-80 rounded-3xl shadow-2xl border border-white">

        {/* Company Logos */}
        <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
          <img
            src={eygdsLogo}
            alt="EY GDS Logo"
            loading="lazy"
            decoding="async"
            className="h-20 md:h-24 object-contain rounded-xl border-2 border-purple-500 p-1 bg-white"
          />
          <img
            src={aicteLogo}
            alt="AICTE Logo"
            loading="lazy"
            decoding="async"
            className="h-20 md:h-24 object-contain rounded-xl border-2 border-purple-500 p-1 bg-white"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">{EXPERIENCE.role}</h3>
        <h4 className="text-center text-gray-300 font-medium mb-2">{EXPERIENCE.company}</h4>
        <p className="text-center text-gray-400 italic mb-4">{EXPERIENCE.date}</p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          {EXPERIENCE.desc.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {/* Skills */}
        <div className="mb-6">
          <h5 className="font-semibold text-white mb-2">Skills:</h5>
          <ul className="flex flex-wrap gap-2" aria-label="Skills used">
            {EXPERIENCE.skills.map((skill) => (
              <li key={skill} className="bg-blue-600 text-gray-200 px-3 py-1 rounded-lg text-xs md:text-sm font-medium border border-gray-400">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* View Certificate Button */}
        <div className="text-center">
          <button
            onClick={openCert}
            aria-haspopup="dialog"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-full font-semibold text-white shadow-lg transition transform hover:scale-105 hover:brightness-150"
          >
            View Certificate
          </button>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Internship Certificate"
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={closeCert}
        >
          <div
            className="relative max-w-4xl w-full p-4 sm:p-6 bg-gray-900 rounded-2xl shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={closeCert}
                aria-label="Close certificate"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition"
              >
                Close
              </button>
            </div>
            <img
              src={certificate}
              alt="Web Development Internship Certificate"
              className="w-full h-auto rounded-xl border border-purple-500"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
