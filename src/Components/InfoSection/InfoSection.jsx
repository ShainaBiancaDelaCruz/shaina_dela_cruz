import React, { useState } from "react";

const data = {
  juniorHigh: [
    { title: "College of the Immaculate Concepcion Cabanatuan", institution: "College of the Immaculate Concepcion Cabanatuan ", year: "2017-2019" }
  ],
  seniorHigh: [
    { title: "College of the Immaculate Concepcion Cabanatuan", institution: "College of the Immaculate Concepcion Cabanatuan ", year: "2019-2021" }
  ],
  college: [
    { degree: "Bachelor of Science in Information Technology", institution: "Phinma Araullo University", year: "2021-Present" },

  ],
  workExperience: [
    {
      position: "Web Developer & Tester",
      company: "Eurasia",
      duration: "July 2024 - September 2024",
      description: "Voucher system of the products which includes the payment of the products and expenses which can track what bank is used for the transaction,who processed and approved the payment. The technologies used in this project React Vite , Tailwind,and Mongo DB is used ."
    },
    {
      position: "Sofware Quality Assurace Tester",
      company: "uTest",
      duration: "January 2023 - Present",
      description: "Test website or web applications, and mobile applications including facial verifications, e-commerce, and entertainment website."
    },
    {
      position: "Digital Marketing Specialist",
      company: "Team Intelligence",
      duration: "November 2024 - February 2025",
      description: "I write news and Forex broker reviews. I also handle email marketing and lead generation to boost engagement and conversions."
    },
  ],
  achievements: [
    { title: "Salesforce", year: "2024", description: "Achieved 37 Superbadges" },
    { title: "uTest", year: "2024", description: "Achieved Bronze badge for testing website or web applications, and mobile applications including facial verifications, e-commerce, and entertainment website." },
  ],
};

const InfoSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const renderEducationContent = () => {
    return (
      <div className="relative border-l border-gray-700 ml-8">
        {/* Junior High Section */}
        <div className="mb-10 ml-8">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-gray-700 "></div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Junior High</h3>
          {data.juniorHigh.map((cert, index) => (
            <div key={index} className="mb-4">
              
              <h4 className="text-lg font-semibold">{cert.title}</h4>
              <p className="text-gray-400">{cert.institution}</p>
              <p className="text-gray-400">{cert.year}</p>
            </div>
          ))}
        </div>

         {/* Senior High Section */}
      <div className="mb-10 ml-8">
        <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-gray-700"></div>
        <h3 className="text-2xl font-bold mb-4 text-primary">Senior High</h3>
        {data.seniorHigh.map((cert, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-semibold">{cert.title}</p>
            <p className="text-gray-400">{cert.institution}</p>
            <p className="text-gray-400">{cert.year}</p>
          </div>
        ))}
      </div>

        {/* College Section */}
        <div className="mb-10 ml-8">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-gray-700"></div>
          <h3 className="text-2xl font-bold mb-4 text-primary">College</h3>
          {data.college.map((edu, index) => (
            <div key={index} className="mb-4">

             
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-gray-400"> {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWorkExperienceContent = () => {
    return (
      <div className="relative border-l border-gray-700 ml-8">
        {data.workExperience.map((job, index) => (
          <div key={index} className="mb-4 ml-6"> {/* Added ml-6 for the gap */}
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-gray-700"></div>
            <p className="text-2xl font-bold mt-10 text-white">{job.position}</p> {/* Made title bold */}
            <p className="text-gray-400">{job.company} - {job.duration}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
 
  const renderAchievementsContent = () => {
    return (
      <div className="relative border-l border-gray-700 ml-8">
        {data.achievements.map((ach, index) => (
          <div key={index} className="ml-6"> {/* Added ml-6 for the gap */}
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-gray-700"></div>
           
            <p className=" font-bold text-white text-2xl ">{ach.title}</p>
            <p className="text-gray-300">{ach.description}</p>
            <p className="text-gray-300">{ach.year}</p>
            <br></br>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">
        Background Information
      </h2>

      {/* Button Container */}
      <div className="relative z-10 flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-l-lg  ${activeTab === "education" ? "bg-yellow text-white" : "bg-white hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-black"}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "workExperience" ? "bg-yellow text-white" : "bg-white hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-black"}`}
          onClick={() => setActiveTab("workExperience")}
        >
          Work Experience
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${activeTab === "achievements" ? "bg-yellow text-white" : "bg-white hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-black"}`}
          onClick={() => setActiveTab("achievements")}
        >
          Achievements
        </button>
      </div>

      {/* Content for Education Section */}
      {activeTab === "education" && renderEducationContent()}

      {/* Content for Work Experience Section */}
      {activeTab === "workExperience" && renderWorkExperienceContent()}

      {/* Content for Achievements Section */}
      {activeTab === "achievements" && renderAchievementsContent()}
    </div>
  );
};

export default InfoSection;
