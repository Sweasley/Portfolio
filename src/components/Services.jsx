import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const icons = [
  {
    name: "HTML",
    pic: <FaHtml5 style={{ color: "#E34F26" }} />,
  },
  {
    name: "CSS",
    pic: <FaCss3Alt style={{ color: "#1572B6" }} />,
  },
  {
    name: "JavaScript",
    pic: <FaJs style={{ color: "#F7DF1E" }} />,
  },
  {
    name: "React",
    pic: <FaReact style={{ color: "#61DAFB" }} />,
  },
  {
    name: "Bootstrap",
    pic: <FaBootstrap style={{ color: "#7952B3" }} />,
  },
  {
    name: "Tailwind",
    pic: <SiTailwindcss style={{ color: "#06B6D4" }} />,
  },
  {
    name: "PHP",
    pic: <FaPhp style={{ color: "#777BB4" }} />,
  },
  {
    name: "SQL",
    pic: <FaDatabase style={{ color: "#4479A1" }} />,
  },
];

const Services = () => {
  return (
    <div
      className="bg-black text-gray-400  py-20 md:py-10 max-w-[1200px] mx-auto overflow-hidden "
      id="Services"
    >
      <h2 className="text-white text-xl md:text-4xl font-bold text-center mb-4 pt-20 ">
        <span className="primary-color grad-text">My Tech Stack</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 justify-items-center pt-5">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className="flex flex-col items-center w-[60px] md:w-[100px] mx-auto relative transition-all duration-300 transform hover:scale-110"
          >
            <div className="text-4xl pt-2">{icon.pic}</div>
            <p className="mt-2 text-white text-center">{icon.name}</p>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent hover:border-indigo-400 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
