import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiPhp, SiTailwindcss, SiJquery, SiVite, SiPostman, SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoPython, IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Banner = ({ togglePlay }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container sm:py-0 relative" id="skills">
      <h1
        data-aos="fade-up"
        className="text-3xl font-semibold text-center sm:text-4xl mb-12 text-white"
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 justify-center">
        <div data-aos="fade-up" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaHtml5 />
          <p className="text-[20px] font-semibold">HTML</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaCss3Alt />
          <p className="text-[20px] font-semibold">CSS</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaBootstrap />
          <p className="text-[20px] font-semibold">Bootstrap</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <SiTailwindcss />
          <p className="text-[20px] font-semibold">Tailwind</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <IoLogoJavascript />
          <p className="text-[20px] font-semibold">JavaScript</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <SiJquery />
          <p className="text-[20px] font-semibold">jQuery</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <SiPhp />
          <p className="text-[20px] font-semibold">PHP</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="700" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <TbBrandMysql />
          <p className="text-[20px] font-semibold">MySQL</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="800" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaNodeJs />
          <p className="text-[20px] font-semibold">Node.js</p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="900" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
        <SiMongodb />
          <p className="text-[20px] font-semibold">Mongo DB</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaReact />
          <p className="text-[20px] font-semibold">React</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1100" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <IoLogoPython />
          <p className="text-[20px] font-semibold">Python</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1200" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <SiVite />
          <p className="text-[20px] font-semibold">Vite</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1300" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <IoLogoFigma />
          <p className="text-[20px] font-semibold">Figma</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1400" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <FaGithub />
          <p className="text-[20px] font-semibold">GitHub</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="1500" className="text-6xl text-white text-center grid place-items-center w-36 border border-white-500 rounded-lg py-3 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black bg-black relative z-10">
          <SiPostman />
          <p className="text-[20px] font-semibold">Postman</p>
        </div>
      </div>

      {/* background color blob */}
      <div className="h-[150px] w-[150px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] right-[-120px] blur-3xl opacity-50 "></div>
    </div>
  );
};

export default Banner;
