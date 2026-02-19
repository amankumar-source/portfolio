// import profileImg from "../../../assets/profileimg-removebg-preview.png";
// import Text from "../../../Text";
// import { useState } from "react";

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div
//       id="home"
//       className="min-h-screen text-white flex flex-col-reverse md:flex-row w-full justify-center md:justify-between items-center 
//              p-6 sm:p-10 md:p-20 pt-28 md:pt-32 gap-10"
//     >
//       <div className="w-full md:w-2/4 text-center md:text-left flex flex-col justify-center">
//         <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
//           <span className="block">
//             <Text />
//           </span>
//         </h1>
//         <h1 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-gray-300 tracking-wide ">
//            B.Tech | Associate Software Engineer
//         </h1>
//         <p className="text-sm sm:text-base md:text-xl tracking-tight text-gray-300 leading-relaxed mt-4">
//           I am an Associate Software Engineer passionate about building modern, scalable, and user-centric applications. With hands-on experience in the MERN stack and strong problem-solving skills in Java, I bring a solid foundation in full-stack development along with a focus on writing clean, maintainable code.
//         </p>

//         <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-6">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="w-full sm:w-auto text-white py-2 px-6 text-sm sm:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           >
//             Download CV
//           </button>

//           {isOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//               <div
//                 className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] h-[80%] relative p-4 flex flex-col 
//                  transform transition-all duration-500 ease-out scale-95 opacity-0 animate-fadeInScale"
//               >
//                 {/* Close Button (top-right) */}
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition duration-200"
//                 >
//                   ✕
//                 </button>

//                 {/* Resume Preview */}
//                 <iframe
//                   src="/Aman-Resume.pdf"
//                   title="Resume Preview"
//                   className="w-full flex-1 rounded-lg border"
//                 />

//                 {/* Download Button Centered */}
//                 <div className="mt-4 flex justify-center">
//                   <a
//                     href="/Aman-Resume.pdf"
//                     download
//                     className="px-6 py-2 bg-[#465697] text-white rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition"
//                   >
//                     Download CV
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//           <a
//             href="mailto:ar1075840@gmail.com"
//             className="w-full sm:w-auto flex items-center justify-center gap-2 text-white py-2 px-6 text-sm sm:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* Right Side (Profile Image) */}
//       <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0">
//         <div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="relative w-full h-full rounded-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import profileImg from "../../../assets/profileimg-removebg-preview.png";
import Text from "../../../Text";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen text-white flex flex-col-reverse md:flex-row w-full 
      justify-center md:justify-between items-center 
      px-6 sm:px-10 md:px-20 pt-28 md:pt-32 gap-12"
    >
      {/* Left Content */}
      <div className="w-full md:w-2/4 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <Text />
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-400">
          Associate Software Engineer
        </h2>

        <p className="mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Associate Software Engineer with hands-on experience in MERN stack and
          Java. Focused on building scalable, user-centric applications with
          clean, maintainable code.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
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

        {/* Desktop-only Availability Badge */}
        <div className="hidden md:flex mt-6">
          <span className="px-4 py-1 rounded-full text-sm 
          bg-green-500/10 text-green-400 border border-green-500/20">
            ● Open to Opportunities
          </span>
        </div>
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
