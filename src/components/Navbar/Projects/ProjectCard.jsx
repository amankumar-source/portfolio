import React, { useState } from "react";

const ProjectCard = ({ title, description, tags, demoLink, codeLink, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Normal Card (taller with increased height) */}
      <div
        className="group relative bg-[#0e0e1a] border border-white rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_25px_3px_rgba(130,69,236,0.6)] transition-all duration-300 flex flex-col cursor-pointer h-[550px]" // Increased height
        onClick={() => setIsOpen(true)}
      >
        {/* Project Image */}
        {image && (
          <div className="w-full h-56 overflow-hidden"> {/* Bigger image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm flex-grow">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-sky text-[#c9aaff] px-3 py-1 rounded-lg text-xs font-medium border border-[#8245ec]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#121224] rounded-3xl shadow-2xl w-full max-w-4xl p-8 animate-scaleUp border border-purple-700">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg transition"
            >
              ✕
            </button>

            {/* Big Image */}
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
              />
            )}

            {/* Title & Description */}
            <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
            <p className=" text-gray-300 mb-6 text-lg leading-relaxed">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-sky text-[#c9aaff] px-3 py-1 rounded-lg text-sm font-medium border border-[#8245ec]/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons only inside popup */}
            <div className="flex gap-6">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:brightness-125 hover:scale-105 transition-transform duration-300"
              >
                🚀 Demo
              </a>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md hover:brightness-125 hover:scale-105 transition-transform duration-300"
              >
                💻 Code
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.85); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.35s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default ProjectCard;
