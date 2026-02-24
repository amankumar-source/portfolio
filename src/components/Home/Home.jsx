import profileImg from "../../assets/profileimg-removebg-preview.png";
import Text from "../../Text";
import { useState, useCallback } from "react";
import GitHubHeatmap from "../GitHubHeatmap/GitHubHeatmap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <section
      id="home"
      className="min-h-screen text-white flex flex-col-reverse md:flex-row w-full 
      justify-center md:justify-between items-center 
      px-4 sm:px-8 md:px-12 lg:px-20 pt-16 md:pt-20 gap-6 md:gap-8"
    >
      {/* Left Content — explicit md width for iPad */}
      <div className="w-full md:w-[55%] lg:w-3/5 text-center md:text-left flex flex-col justify-center">
        <div className="w-full text-center md:text-left flex flex-col justify-center">
          <Text />
        </div>

        <h2 className="mt-3 md:mt-4 text-base sm:text-xl md:text-2xl font-medium text-gray-400">
         Aspiring Software Engineer
        </h2>

        <p className="mt-4 md:mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Aspiring Software Engineer building scalable, user-centric web applications using the MERN stack and Java, focused on clean and maintainable code.
        </p>

        {/* Buttons */}
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-6 md:px-7 py-2.5 rounded-full 
            bg-indigo-600 text-white font-semibold 
            hover:bg-indigo-500 transition duration-300"
          >
            Download CV
          </button>

          <a
            href="mailto:ar1075840@gmail.com"
            className="w-full sm:w-auto px-6 md:px-7 py-2.5 rounded-full 
            border border-gray-500 text-gray-200 font-semibold 
            hover:bg-white hover:text-black transition duration-300 text-center"
          >
            Contact Me
          </a>
        </div>

        {/* GitHub Contribution Heatmap */}
        <GitHubHeatmap />
      </div>

      {/* Right Image — proportional sizes for each breakpoint */}
      <div className="flex justify-center md:justify-end w-full md:w-auto flex-shrink-0">
        <div
          className="relative 
          w-36 h-36 
          sm:w-48 sm:h-48 
          md:w-52 md:h-52 
          lg:w-[22rem] lg:h-[22rem]
          xl:w-[26rem] xl:h-[26rem]"
        >
          {/* Soft outer glow (tablet+ only) */}
          <div className="hidden md:block absolute inset-0 rounded-full 
          bg-gradient-to-br from-indigo-500/40 to-purple-600/40 
          blur-3xl opacity-40"></div>

          {/* Gradient ring */}
          <div className="absolute inset-0 rounded-full 
          bg-gradient-to-br from-indigo-500 to-purple-600 p-[3px]">
            {/* Inner dark ring */}
            <div className="w-full h-full rounded-full bg-[#0f172a] p-[5px] md:p-[6px]">
              {/* Image */}
              <img
                src={profileImg}
                alt="Aman Kumar profile"
                className="w-full h-full rounded-full object-cover 
                shadow-2xl transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="CV Preview"
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full md:w-[70%] lg:w-[60%] 
            h-[85vh] relative p-4 flex flex-col animate-fadeInScale"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close CV preview"
              className="absolute top-3 right-3 w-9 h-9 
              rounded-full bg-gray-100 text-black font-bold text-sm
              hover:bg-red-600 hover:text-white transition z-10"
            >
              ✕
            </button>
            <iframe
              src="/Aman-Resume.pdf"
              title="Aman Kumar Resume"
              className="w-full flex-1 rounded-lg border mt-2"
            />
            <div className="mt-4 flex justify-center">
              <a
                href="/Aman-Resume.pdf"
                download
                className="px-6 py-2 bg-indigo-600 text-white 
                rounded-lg font-semibold hover:bg-indigo-500 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
