import React, { useState } from "react";
import certificate from "../../../assets/intern.png";
import eygdsLogo from "../../../assets/ey.png";
import aicteLogo from "../../../assets/aicte.png";
const Experience = () => {
  const [showCert, setShowCert] = useState(false);

  const experience = {
    role: "Web Development Intern",
    company: "EY GDS & AICTE – Next Gen Employability Program",
    date: "Dec 2024 - Jan 2025 (6 weeks)",
    desc: [
      "Built Web applications using the MERN Stack",
      "Created responsive UI with React and Tailwind CSS",
      "Connected frontend to backend using REST APIs",
      "Used MongoDB Atlas for database integration",
      "Learned Git, project deployment, and team collaboration"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "MERN Stack"],
  };

  return (
    <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide text-white"> EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-1xl mx-auto p-8 bg-gray-800 bg-opacity-80 rounded-3xl shadow-2xl border border-white">
  
  
  <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
  
    {eygdsLogo && (
      <img
        src={eygdsLogo}
        alt="EY GDS Logo"
        className="h-20 md:h-24 object-contain rounded-xl border-2 border-purple-500 p-1 bg-white"
      />
    )}

    
    {aicteLogo && (
      <img
        src={aicteLogo}
        alt="AICTE Logo"
        className="h-20 md:h-24 object-contain rounded-xl border-2 border-purple-500 p-1 bg-white"
      />
    )}
  </div>

        

      
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">{experience.role}</h3>
        <h4 className="text-center text-gray-300 font-medium mb-2">{experience.company}</h4>
        <p className="text-center text-gray-400 italic mb-4">{experience.date}</p>

        
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          {experience.desc.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Skills */}
        <div className="mb-6">
          <h5 className="font-semibold text-white mb-2">Skills:</h5>
          <ul className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <li key={idx} className="bg-blue-600 text-gray-200 px-3 py-1 rounded-lg text-xs md:text-sm font-medium border border-gray-400">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* View Certificate Button */}
        <div className="text-center">
          <button
            onClick={() => setShowCert(true)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-full font-semibold text-white shadow-lg transition transform hover:scale-105 hover:brightness-150"
          >
            View Certificate
          </button>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div className="relative max-w-4xl w-full p-6 bg-gray-900 rounded-2xl shadow-2xl transform scale-0 animate-scaleIn">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowCert(false)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition"
              >
                Close
              </button>
            </div>

            {/* Certificate Image */}
            <img src={certificate} alt="Certificate" className="w-full h-auto rounded-xl border border-purple-500" />
          </div>
        </div>
      )}

      {/* Tailwind keyframes for pop-up animation */}
      <style>
        {`
          @keyframes scaleIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
