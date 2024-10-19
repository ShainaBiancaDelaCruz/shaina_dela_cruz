import React from "react";
import th from "../../assets/ss.jpg"; // Example import for an image
import greatlearning from "../../assets/greatlearning.jpg"; // Example import for an image
import aws from "../../assets/aws.png"; // Example import for an image
import ircite from "../../assets/ircite.png"; // Example import for an image
import pinning from "../../assets/pinning.jpg"; // Example import for an image
import research from "../../assets/research.jpg"; // Example import for an image
import techtalk from "../../assets/techtalk.png"; // Example import for an image


const CertificateData = [
  {
    name: "Great Learning",
    imageSrc: greatlearning, // Replace with your actual image imports
    description: "Software Testing Tutorial",
    aosDelay: "300",
  },
  {
    name: "AWS",
    imageSrc: aws, // Replace with your actual image imports
    description: "Introduction to Cloud Semester 2",
    aosDelay: "500",
  },
  {
    name: (
      <>
        IRCITE <br />
      </>
    ),
    imageSrc: ircite, // Replace with your actual image imports
    description: "International Research Conference on Information Technology ",
    aosDelay: "700",
  },
  {
    name: "Pinning",
    imageSrc: pinning, // Replace with your actual image imports
    description: "11th Pinning Ceremony",
    aosDelay: "500",
  },
  {
    name: "Research Colloquium",
    imageSrc: research, // Replace with your actual image imports
    description: "University Research Colloquium 2024",
    aosDelay: "500",
  },
  {
    name: "TECHTALK",
    imageSrc: techtalk, // Replace with your actual image imports
    description: "Explore the Cyber Security Wars",
    aosDelay: "500",
  },
];

const Certificate = () => {
  return (
    <>
      <div className="py-14 sm:min-h-[200px]  mx-10 md:mx-28 mt-24" id="certificate">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12 text-white"
          >
            My Certificates
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {CertificateData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-black hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300 border-2 border-yellow-500"
              >
                <div className="grid place-items-center">
                  <img
                    src={data.imageSrc}
                    alt={data.name}
                    className="w-full max-w-[100%] h-[300px]"
                  />
                </div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-center">{data.description}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
