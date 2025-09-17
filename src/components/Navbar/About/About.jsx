import AboutImg from "../../../assets/portfolio_img.png";
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-950 shadow-xl mx-0 md:mx-20 rounded-lg p-12 pt-20'>
      
      <div className='w-full'>
       
        <div className="text-center mb-8">
          <h2 className='text-2xl md:text-4xl font-bold text-white'>About</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        </div>

        <div className='md:flex md:flex-row md:items-start flex-col items-center gap-8'>
          <img className='md:h-80 w-full md:w-auto object-cover rounded-lg' src={AboutImg} alt="About" />
          
          
    <ul className="flex flex-col gap-6">
      <li className="flex flex-col md:flex-row md:gap-3 items-center md:items-start">
        <IoArrowForward size={30} className="mt-1 md:mt-0 text-blue-500" />
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
            Technical Skills
          </h1>
          <p className="text-sm md:text-md leading-tight">
            Proficient in the MERN stack (MongoDB, Express, React, Node.js) with
            strong problem-solving skills in Java. Experienced in building
            responsive, scalable, and user-friendly applications.
          </p>
        </div>
      </li>

      <li className="flex flex-col md:flex-row md:gap-3 items-center md:items-start">
        <IoArrowForward size={30} className="mt-1 md:mt-0 text-blue-500" />
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
            Projects & Experience
          </h1>
          <p className="text-sm md:text-md leading-tight">
            Hands-on experience through academic and personal projects,
            including full-stack web applications, REST APIs, and interactive
            front-end solutions. Familiar with Git, GitHub, and collaborative
            workflows.
          </p>
        </div>
      </li>

      <li className="flex flex-col md:flex-row md:gap-3 items-center md:items-start">
        <IoArrowForward size={30} className="mt-1 md:mt-0 text-blue-500" />
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
            Soft Skills
          </h1>
          <p className="text-sm md:text-md leading-tight">
            Strong communication, teamwork, and adaptability with a keen eye for
            detail. Passionate about problem-solving, debugging, and writing
            clean, maintainable code.
          </p>
        </div>
      </li>

      <li className="flex flex-col md:flex-row md:gap-3 items-center md:items-start">
        <IoArrowForward size={30} className="mt-1 md:mt-0 text-blue-500" />
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
            Career Goals
          </h1>
          <p className="text-sm md:text-md leading-tight">
            Currently in the final year of B.Tech (CSE), aspiring to work as a
            Software Engineer where I can leverage my full-stack skills,
            problem-solving mindset, and continuous learning attitude to
            contribute to impactful projects.
          </p>
        </div>
      </li>
    </ul>
  
























        </div>
      </div>
    </div>
  )
}

export default About



