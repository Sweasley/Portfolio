import React from "react";
import pic from "../assets/aboutme.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 " id="About">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color grad-text">
              About Me
            </h2>
            <p className="text-base lg:text-lg">
              I am a recent graduate with a bachelor's degree in Information
              Systems, passionate about web development and aspiring to become a
              data analyst. With strong communication skills and a keen
              eagerness to learn, I am enthusiastic about exploring new
              technologies and contributing to innovative projects.
            </p>
          </div>
        </div>
        <img
          src={pic}
          alt=""
          className="mx-auto rounded-3xl py-8 md:py-0"
          width={300}
          height={300}
        />
      </div>

      {/* Hobbies Section */}
      <div className="md:grid md:grid-cols-2 ">
        <div className="bg-black p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-white mb-4">Hobbies</h3>
          <div className="flex flex-wrap gap-4">
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Video Editing</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2 hover:text-black">
              <p className="text-white ">Reading</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Cooking</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Playing Games</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Listening to Music</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Learning New things</p>
            </div>
          </div>
        </div>
        {/* Soft skills section */}
        <div className="bg-black p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-white mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Communication</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Team Player</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Problem Solving</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Adaptability</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Critical Thinking</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Time Management</p>
            </div>
            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Attention to Detail</p>
            </div>

            <div className="box-item border border-gray-600 rounded-md px-4 py-2">
              <p className="text-white">Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
