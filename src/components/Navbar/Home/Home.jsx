import profileImg from "../../../assets/profileimg-removebg-preview.png";
import Text from "../../../Text";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="home"
      className="min-h-screen text-white flex flex-col-reverse md:flex-row w-full justify-center md:justify-between items-center 
             p-6 sm:p-10 md:p-20 pt-28 md:pt-32 gap-10"
    >
      <div className="w-full md:w-2/4 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
          <span className="block">
            <Text />
          </span>
        </h1>
        <h1 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-gray-300 tracking-wide ">
          Final-Year B.Tech | Aspiring Software Engineer
        </h1>
        <p className="text-sm sm:text-base md:text-xl tracking-tight text-gray-300 leading-relaxed mt-4">
          I’m a software engineer in the making, passionate about building
          modern, scalable, and user-centric applications. With hands-on
          experience in the MERN stack and strong problem-solving skills in
          Java, I bring a balance of full-stack development expertise and clean
          code practices.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto text-white py-2 px-6 text-sm sm:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Download CV
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div
                className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] h-[80%] relative p-4 flex flex-col 
                 transform transition-all duration-500 ease-out scale-95 opacity-0 animate-fadeInScale"
              >
                {/* Close Button (top-right) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition duration-200"
                >
                  ✕
                </button>

                {/* Resume Preview */}
                <iframe
           src="/amancvv.pdf"
        title="Resume Preview"
       className="w-full flex-1 rounded-lg border"
        />

      <a
      href="/amancvv.pdf"
     download
       className="px-6 py-2 bg-[#465697] text-white rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition"
      >
        Download CV
</a>
                </div>
              </div>
            </div>
          )}
          <a
            href="mailto:ar1075840@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-white py-2 px-6 text-sm sm:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side (Profile Image) */}
      <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0">
        <div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
