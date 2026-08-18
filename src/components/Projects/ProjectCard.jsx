import React, { useState, useCallback, useEffect, memo } from "react";
import { createPortal } from "react-dom";

// React.memo: prevents re-render if parent re-renders with the same props
const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  demoLink,
  codeLink,
  image,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // useCallback: creates stable handler references — avoids new function instances each render
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <>
      {/* project-card class applies will-change:transform from index.css */}
      <div
        className="project-card group relative bg-[#0e0e1a] border border-white rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_25px_3px_rgba(130,69,236,0.6)] transition-all duration-300 flex flex-col cursor-pointer min-h-[480px]"
        onClick={open}
      >
        {image && (
          <div className="w-full h-48 sm:h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm flex-grow">{description}</p>

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

      {/* Modal — rendered via Portal at document.body to escape overflow/transform stacking contexts */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] px-4 py-6"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={close}
          >
            <div
              className="relative bg-[#121224] rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 animate-scaleUp border border-purple-700 flex flex-col gap-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-base font-bold shadow-lg transition z-10"
              >
                ✕
              </button>

              {image && (
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-xl shadow-lg"
                />
              )}

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-sky text-[#c9aaff] px-3 py-1 rounded-lg text-sm font-medium border border-[#8245ec]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                {demoLink && demoLink !== "#" ? (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl font-semibold text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:brightness-125 hover:scale-105 transition-transform duration-300"
                  >
                    🚀 Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 text-center py-3 rounded-xl font-semibold text-base sm:text-lg bg-gray-800 text-gray-400 border border-gray-700 cursor-not-allowed opacity-70"
                  >
                    🚀 Demo (Coming Soon)
                  </button>
                )}

                {codeLink && codeLink !== "#" ? (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl font-semibold text-base sm:text-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md hover:brightness-125 hover:scale-105 transition-transform duration-300"
                  >
                    💻 Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 text-center py-3 rounded-xl font-semibold text-base sm:text-lg bg-gray-800 text-gray-400 border border-gray-700 cursor-not-allowed opacity-70"
                  >
                    💻 Code (Internal)
                  </button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
});

export default ProjectCard;
