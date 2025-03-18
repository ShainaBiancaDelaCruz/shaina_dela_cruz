import React, { useEffect, useState } from "react";
import StarCanvas from "../StarCanvas/StarCanvas";
import CV from "../../assets/resume.pdf";
import HeroPng from "../../assets/prof-photo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Hero = ({ togglePlay }) => {
  const [text, setText] = useState("SYSTEM ANALYST");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ["SYSTEM ANALYST", "TECHNICAL SUPPORT", "DIGITAL MARKETING SPECIALIST"];
  const typingSpeed = 150; // Typing speed in milliseconds
  const pauseDuration = 1000; // Pause duration between phrases

  useEffect(() => {
    let index = 0;
    const fullText = phrases[currentPhraseIndex];
    
    // Typing effect
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Update text to include one more character
        index++;
      } else {
        clearInterval(typingInterval); // Clear typing interval when complete
        // Pause before switching phrases
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Switch to next phrase
          setText(""); // Clear text for re-typing effect
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up on unmount
  }, [currentPhraseIndex]); // Run effect whenever the current phrase index changes

  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <StarCanvas />
        <div className="container min-h-[780px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" className="text-4xl font-semibold tilt-prism-unique space-mono-bold text-[45px] md:text-[55px] text-white">
                Hi! I'm{" "}
                <p>
                  <span className="text-yellow">
                    <br />
                    SHAINA
                  </span>
                </p>
                <p>
                  <span className="text-yellow"> DELA CRUZ</span>
                </p>
                <div>
                  <span className="bg-clip-text text-transparent text-white md:text-[35px] text-[30px] font-bold">
                    <br />
                    {text}
                  </span>
                </div>
              </h1>

              <div className="flex gap-6">
                <a href={CV} download="resume_shaina_dela_cruz.pdf">
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
                <a
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="https://www.linkedin.com/in/shaina-bianca-dela-cruz-5b58b4274/"
                  className="text-4xl hover:text-[40px] text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="900"
                  href="https://www.facebook.com/shainabianca.floresdelacruz"
                  target="_blank"
                  className="text-4xl hover:text-[40px] text-white"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  href="https://github.com/ShainaBiancaDelaCruz?tab=repositories"
                  className="text-4xl hover:text-[40px] text-white"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
            {/* image section */}
            <div data-aos="fade-up" data-aos-offset="0" className="order-1 sm:order-2">
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
