
import profileImg from "../../assets/profileimg-removebg-preview.png";
import Text from "../../Text";
import { useState, useEffect } from "react";
import GitHubHeatmap from "../GitHubHeatmap/GitHubHeatmap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(`
      Component Name: Home (Hero section)
      What was not responsive: Earlier on mobile the heatmap and texts overflowed due to missing containers and nested HTML tags, forcing a horizontal scroll on some viewports.
      What was changed to fix it: Implemented 'w-full px-6 sm:px-10 md:px-20 flex-col-reverse' layout, locked mobile grid widths gracefully.
      Affected screen sizes: All.
    `);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen text-white flex flex-col-reverse md:flex-row w-full 
      justify-center md:justify-between items-center 
      px-6 sm:px-10 md:px-20 pt-16 md:pt-20 gap-8"
    >
      {/* Left Content */}
      <div className="w-full lg:w-3/5 text-center md:text-left flex flex-col justify-center">
        <div className="w-full text-center md:text-left flex flex-col justify-center">
          <Text />
        </div>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-400">
          Associate Software Engineer
        </h2>

        <p className="mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Associate Software Engineer building scalable, user-centric web applications using the MERN stack and Java, focused on clean and maintainable code.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto px-7 py-2.5 rounded-full 
            bg-indigo-600 text-white font-semibold 
            hover:bg-indigo-500 transition duration-300"
          >
            Download CV
          </button>

          <a
            href="mailto:ar1075840@gmail.com"
            className="w-full sm:w-auto px-7 py-2.5 rounded-full 
            border border-gray-500 text-gray-200 font-semibold 
            hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* GitHub Contribution Heatmap */}
        <GitHubHeatmap />
      </div>

      {/* Right Image – Clean & Premium */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <div
          className="relative 
          w-40 h-40 
          sm:w-56 sm:h-56 
          md:w-[22rem] md:h-[22rem] 
          lg:w-[26rem] lg:h-[26rem]"
        >
          {/* Soft outer glow (desktop only) */}
          <div className="hidden md:block absolute inset-0 rounded-full 
          bg-gradient-to-br from-indigo-500/40 to-purple-600/40 
          blur-3xl opacity-40"></div>

          {/* Gradient ring */}
          <div className="absolute inset-0 rounded-full 
          bg-gradient-to-br from-indigo-500 to-purple-600 p-[3px]">
            {/* Inner dark ring */}
            <div className="w-full h-full rounded-full bg-[#0f172a] p-[6px]">
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] 
            h-[80%] relative p-4 flex flex-col animate-fadeInScale"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 
              rounded-full bg-gray-100 text-black font-bold 
              hover:bg-red-600 hover:text-white transition"
            >
              ✕
            </button>

            {/* Resume */}
            <iframe
              src="/Aman-Resume.pdf"
              title="Resume Preview"
              className="w-full flex-1 rounded-lg border"
            />

            {/* Download Button */}
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
