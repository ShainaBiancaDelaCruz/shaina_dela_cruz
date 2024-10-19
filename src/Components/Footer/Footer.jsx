import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="text-white bg-black bg-opacity-70 mt-14 rounded-t-3xl relative z-10 shadow-lg border-t-4 border-white-800 ">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="logo" className="h-16 w-16" />
          <h1 className="text-2xl font-bold">haina</h1>
        </div>
        <div className="flex justify-center mt-5 gap-2">
                <a href="https://www.linkedin.com/in/shaina-bianca-dela-cruz-5b58b4274/"  className="text-4xl hover:text-[40px]">
                <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/shainabianca.floresdelacruz" target="_blank" className="text-4xl hover:text-[40px]">
                <FaFacebookSquare />
                </a>
                <a href="https://github.com/ShainaBiancaDelaCruz?tab=repositories"  className="text-4xl hover:text-[40px]">
                <FaGithubSquare />
                </a>
              </div>
      </div>
    </div>
  );
};

export default Footer;
