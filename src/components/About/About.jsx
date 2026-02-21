import AboutImg from "../../assets/portfolio_img.png";
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id='About' className='w-full overflow-hidden px-4 md:px-0'>
      <div className='text-white flex flex-col overflow-hidden bg-slate-950 shadow-xl mx-0 md:mx-20 rounded-2xl p-6 md:p-12 pt-12 md:pt-20'>

        <div className='w-full'>

          <div className="text-center mb-8">
            <h2 className='text-2xl md:text-4xl font-bold text-white'>About</h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          </div>

          <div className='flex flex-col md:flex-row md:items-start gap-8'>
            <img
              className='w-full max-h-56 sm:max-h-72 md:h-80 md:w-auto object-cover rounded-lg flex-shrink-0'
              src={AboutImg}
              alt="About"
              loading="lazy"
              decoding="async"
            />

            <ul className="flex flex-col gap-6 flex-1">
              <li className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <IoArrowForward size={28} className="mt-1 text-blue-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Technical Skills
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 mt-1">
                    Proficient in the MERN stack (MongoDB, Express, React, Node.js) with
                    strong problem-solving skills in Java. Experienced in building
                    responsive, scalable, and user-friendly applications.
                  </p>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <IoArrowForward size={28} className="mt-1 text-blue-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Projects &amp; Experience
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 mt-1">
                    Hands-on experience through academic and personal projects,
                    including full-stack web applications, REST APIs, and interactive
                    front-end solutions. Familiar with Git, GitHub, and collaborative
                    workflows.
                  </p>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <IoArrowForward size={28} className="mt-1 text-blue-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Soft Skills
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 mt-1">
                    Strong communication, teamwork, and adaptability with a keen eye for
                    detail. Passionate about problem-solving, debugging, and writing
                    clean, maintainable code.
                  </p>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <IoArrowForward size={28} className="mt-1 text-blue-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Career Goals
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 mt-1">
                    B.Tech (CSE) graduate currently working as an Associate Software Engineer,
                    leveraging full-stack development skills, strong problem-solving abilities,
                    and a continuous learning mindset to build scalable and impactful software solutions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
