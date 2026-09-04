import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* ===== VIT AP ===== */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-start">
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">
              Bachelor of Technology (B.Tech) – 4th Year
            </h3>
            <h4 className="text-md text-gray-300">
              Vellore Institute of Technology, Andhra Pradesh
            </h4>
            <p className="text-sm text-gray-500 mt-2">2022 – Present</p>
            <p className="mt-4 text-gray-400 font-bold">CGPA: 9.17</p>
          </div>
        </div>

        {/* ===== INTERMEDIATE ===== */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-end">
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:mr-44 ml-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">
              Intermediate (MPC)
            </h3>
            <h4 className="text-md text-gray-300">
              Aditya Junior College
            </h4>
            <p className="text-sm text-gray-500 mt-2">2021 – 2023</p>
            <p className="mt-4 text-gray-400 font-bold">Percentage: 96.8%</p>
          </div>
        </div>

        {/* ===== SCHOOL ===== */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-start">
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white">
              Secondary School Education (SSC)
            </h3>
            <h4 className="text-md text-gray-300">
              Aditya [E.M] High School
            </h4>
            <p className="text-sm text-gray-500 mt-2">2020 – 2021</p>
            <p className="mt-4 text-gray-400 font-bold">Percentage: 99.16%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
