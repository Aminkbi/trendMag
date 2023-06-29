import React, { useEffect, useState } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex items-center flex-col justify-between min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="flex flex-col max-w-[2000px] items-center">
        <h1 className="pt-10 text-2xl lg:text-3xl xl:text-5xl font-bold text-white">
          About Me
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <p className="p-4 sm:text-xl lg:text-2xl xl:text-3xl text-center text-gray-800">
            I am a self-taught ReactJS developer with a strong curiosity for new
            technologies and languages. Constantly learning and improving my
            React skills while also aspiring to become a full-stack developer.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="https://github.com/Aminkbi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-amin-khanbabaei-805365221/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
