import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";

const ServicesData = [
  {
    name: "FrontEnd",
    icon: (
      <RiComputerFill className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Creating the user interface of the system where the users interact or navigate.",
    aosDelay: "300",
  },
  {
    name: "BackEnd",
    icon: (
      <FaServer className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Creating the functions of the system for navigating, storing, and management of data.",
    aosDelay: "500",
  },
  {
    name: "Web Design",
    icon: (
      <FaBrush className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Creates a layout or design for the system that is user friendly and appealing.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <div className="container py-14 mt-24 sm:min-h-[600px]" id="services">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-white text-center sm:text-4xl mb-12"
          >
            Services
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {ServicesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white border-2 hover:text-black rounded-lg duration-300 bg-black relative z-10"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;