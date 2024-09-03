import React from "react";
import StarCanvas from "../StarCanvas/StarCanvas"
import CV from "../../assets/resume_shainadelacruz.pdf"
import { BiPlayCircle } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 text-white duration-300 overflow-hidden relative" id="home">
        <StarCanvas/>
        <div className="container min-h-[680px] flex ">
          <div className="sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30 mt-[30%]">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold tilt-prism-unique space-mono-bold text-[45px] md:text-[55px]">
                  Hi! I'm <span className="text-yellow"> SHAINA DELA CRUZ{" "} </span>
                <div>
                <span className="bg-clip-text text-transparent text-white md:text-[45px] text-[40px] font-bold ">
                  <br></br>
                   WEB DEVELOPER
                </span>
                </div>
              </h1>
               
              <p data-aos="fade-up" data-aos-delay="300" className=" text-[30px] font-semibold font-parisienne">
              &quot; Innovation Sparks Success &quot;
              </p>
              <div className="flex gap-6">
                <a href={CV} download>
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="secondary-btn hover:bg-white hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] hover:text-black"
                >
                  Download CV
                </button>
                </a>
                <a href="#contact">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn hover:bg-white text-white"
                >
                  Contact
                </button>
                </a>
              </div>
              <div className="flex gap-2">
                <a data-aos="fade-up" data-aos-delay="700" href="https://www.linkedin.com/in/shaina-bianca-dela-cruz-5b58b4274/"  className="text-4xl hover:text-[40px]">
                <FaLinkedin />
                </a>
                <a data-aos="fade-up" data-aos-delay="900" href="https://www.facebook.com/profile.php?id=61561609829188"  className="text-4xl hover:text-[40px]">
                <FaFacebookSquare />
                </a>
                <a data-aos="fade-up" data-aos-delay="1000" href="https://github.com/ShainaBiancaDelaCruz?tab=repositories"  className="text-4xl hover:text-[40px]">
                <FaGithubSquare />
                </a>
              </div>
            </div>
           
          </div>

          {/* Animated Blob */}
          <div className="h-[170px] w-[170px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
