import React, { useState, useRef, useEffect } from "react";

// Certification data
const CertificationsInfo = [
  {
    title:
      "Software Development Career Training - iHUB DivyaSampark IIT Roorkee",
    description:
      " Completed professional training program on pursuing careers in software development at Indian Institute of Technology Roorkee.",
    imgSrc: "/certifications/TIH2211050.png",
  },
  {
    title: "Web Development with JavaScript - Infosys Springboard",
    description:
      "Completed comprehensive web development course focusing on JavaScript programming and hands-on practical implementation.",
    imgSrc: "/certifications/certif_2025-02-08T16_19_37.3561934Z.png",
  },
  {
    title: "Master Data Management for Beginners - TCS iON Certification",
    description:
      "Completed foundational course in data management principles and practices through Tata Consultancy Services.",
    imgSrc: "/certifications/Aman_Kumar_4594935.png",
  },
  {
    title: " Front-end Web Development - Reliance Foundation Skilling Academy",
    description:
      " Completed front-end web development course from Reliance Foundation.",
    imgSrc: "/certifications/certificate.png",
  },
  {
    title: " ReactJS - The Complete ReactJS Course For Beginners - Udemy",
    description:
      "Mastered fundamental ReactJS concepts and development practices in comprehensive 3-hour beginner course.",
    imgSrc: "/certifications/react.certificate.png",
  },
  {
    title: " Web Design & Development- Skill India Digital Hub",
    description:
      "Participated in government-certified web design and development course through NSDC Skill India platform.",
    imgSrc: "/certifications/nsdc.png",
  },
];

const CertificationCard = ({ cert, onOpen, stopScroll }) => {
  return (
    <div
      className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg flex-shrink-0 w-64 cursor-pointer flex flex-col items-center hover:scale-105 transition-transform duration-300"
      onClick={stopScroll} // Stop scrolling when card clicked
    >
      <img
        src={cert.imgSrc}
        alt={cert.title}
        className="w-full h-36 object-cover rounded-xl mb-3 cursor-pointer"
        onClick={() => onOpen(cert.imgSrc)}
      />
      <h3 className="text-lg font-semibold text-white mb-1 text-center">
        {cert.title}
      </h3>
      <p className="text-gray-400 mb-3 text-center text-sm">
        {cert.description}
      </p>
      <button
        onClick={() => onOpen(cert.imgSrc)}
        className="bg-[#8245ec] text-white px-3 py-1 rounded-lg font-medium hover:bg-[#6939c6] transition-colors duration-300 text-sm"
      >
        View Certificate
      </button>
    </div>
  );
};

const Certifications = () => {
  const [modalImg, setModalImg] = useState(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const isResettingRef = useRef(false); // Track if reset is happening to avoid blinking

  // Function to stop auto-scroll
  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
      isResettingRef.current = false;
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    let observer;

    if (sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !scrollIntervalRef.current) {
            // Start auto-scroll
            scrollIntervalRef.current = setInterval(() => {
              if (scrollRef.current && !isResettingRef.current) {
                // Scroll by 2px every tick
                scrollRef.current.scrollBy({
                  left: 2,
                  behavior: "auto",
                });

                // Detect if near the end - Allow a small threshold for precision
                if (
                  scrollRef.current.scrollLeft +
                    scrollRef.current.clientWidth >=
                  scrollRef.current.scrollWidth - 2
                ) {
                  // Pause scrolling, set resetting flag to true
                  isResettingRef.current = true;
                  clearInterval(scrollIntervalRef.current);
                  scrollIntervalRef.current = null;

                  // After a short delay, reset scroll to start and restart auto-scroll
                  setTimeout(() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
                      isResettingRef.current = false;
                      // Restart scrolling
                      if (!scrollIntervalRef.current) {
                        scrollIntervalRef.current = setInterval(() => {
                          if (scrollRef.current) {
                            scrollRef.current.scrollBy({
                              left: 2,
                              behavior: "auto",
                            });

                            if (
                              scrollRef.current.scrollLeft +
                                scrollRef.current.clientWidth >=
                              scrollRef.current.scrollWidth - 2
                            ) {
                              isResettingRef.current = true;
                              clearInterval(scrollIntervalRef.current);
                              scrollIntervalRef.current = null;
                            }
                          }
                        }, 40);
                      }
                    }
                  }, 500); // pause 500ms before reset to avoid blinking
                }
              }
            }, 40); // smaller interval = faster
          } else {
            stopScroll();
          }
        },
        { threshold: 0.3 } // Trigger when ~30% visible
      );

      observer.observe(sectionRef.current);
    }

    // ✅ Detect manual scroll/touch/wheel → stop auto-scroll
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("touchstart", stopScroll, { passive: true });
      scrollEl.addEventListener("touchmove", stopScroll, { passive: true });
      scrollEl.addEventListener("wheel", stopScroll, { passive: true });
    }

    return () => {
      stopScroll();
      if (observer) observer.disconnect();
      if (scrollEl) {
        scrollEl.removeEventListener("touchstart", stopScroll);
        scrollEl.removeEventListener("touchmove", stopScroll);
        scrollEl.removeEventListener("wheel", stopScroll);
      }
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 px-[5vw] md:px-[6vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A collection of certifications showcasing my skills and achievements
        </p>
      </div>

      {/* Horizontal Scrollable Certification Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#8245ec] scrollbar-track-gray-900"
      >
        {CertificationsInfo.map((cert, idx) => (
          <CertificationCard
            key={idx}
            cert={cert}
            onOpen={setModalImg}
            stopScroll={stopScroll}
          />
        ))}
      </div>

      {/* Modal with Stylish Animation */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div
            className="bg-[#1f1f1f] p-6 rounded-2xl max-w-3xl max-h-[90vh] overflow-auto transform scale-0 opacity-0 transition-all duration-300 ease-out animate-scaleUp relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button shifted to top-right */}
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-1 right-3 bg-[#8245ec] text-white px-4 py-2 rounded-lg hover:bg-[#6939c6] transition-colors duration-300"
            >
              Close
            </button>

            <img
              src={modalImg}
              alt="Certificate"
              className="w-full h-auto object-contain rounded-xl mt-6"
            />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Certifications;
