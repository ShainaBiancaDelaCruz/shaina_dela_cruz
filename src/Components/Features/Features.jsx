import React from "react";
import th from "../../assets/ss.jpg"; // Example import for an image
import eyesmile from "../../assets/eyesmile.png"; // Example import for an image
import voucher from "../../assets/voucher.png"; // Example import for an image
import python from "../../assets/python.png"; // Example import for an image


const FeaturesData = [
  {
    name: "EyeSmile Dental and Optical Clinic Management System",
    imageSrc: eyesmile, // Replace with your actual image imports
    link: "https://eyesmileclinic.com/",
    description: "Web-based dental clinic management system with HTML, CSS, Bootstrap, JQuery, JavaScript, PHP, and MySQL. It manages patient records, appointments, billing, treatment history, and inventory, with secure login and role-based access.",
    aosDelay: "300",
  },
  {
    name: "Eurasia Voucher Disbursement Management System",
    imageSrc: voucher, // Replace with your actual image imports
    link: "#",
    description: "The system facilitated the tracking of product payments, including the approval process, bank details, and the companies being paid. Users could view the type of product paid for, the associated pharmaceutical company, and the payment status.",
    aosDelay: "500",
  },
  {
    name: (
      <>
        Python <br /> Appointment Management System
      </>
    ),
    imageSrc: python, // Replace with your actual image imports
    link: "#",
    description: "This simple Python personal project is a basic CRUD system for managing customer appointments. Users can create, read, update, and delete appointment records, including date, time, and service details. Ideal for basic appointment management needs. ",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <>
   
      <div className="py-14 sm:min-h-[600px]  mx-10 md:mx-28 mt-24" id="projects">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12 text-white"
          >
            My Projects
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {FeaturesData.map((data, index) => (
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
                    className="w-full max-w-[500px]"
                  />
                </div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-justify">{data.description}</p>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block secondary-btn text-sm font-semibold py-2 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;