import React from "react";
import PremiereIcon from "../assets/Premiere.svg";
import PhotoshopIcon from "../assets/Photoshop.svg";
import LightroomIcon from "../assets/Lightroom.svg";
import AfterEffectsIcon from "../assets/After_Effects.svg";
import CapCutIcon from "../assets/capcut.svg";
import FilmoraIcon from "../assets/Filmora.svg";

const icons = [
  {
    name: "Adobe Premiere Pro",
    src: PremiereIcon,
  },
  {
    name: "Photoshop",
    src: PhotoshopIcon,
  },
  {
    name: "Lightroom",
    src: LightroomIcon,
  },
  {
    name: "After Effects",
    src: AfterEffectsIcon,
  },
  {
    name: "CapCut",
    src: CapCutIcon,
  },
  {
    name: "Filmora",
    src: FilmoraIcon,
  },
];

const Skills = () => {
  return (
    <div
      className="bg-black text-gray-400 py-10 md:py-5 max-w-[1200px] mx-auto  "
      id="Skills"
    >
      <div className="text-center">
        <h2 className="text-center primary-color text-xl md:text-4xl font-bold mb-4 grad-text">
          Creative Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-items-center pt-5">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className="flex flex-col items-center w-[60px] md:w-[100px] mx-auto relative transition-all duration-300 transform hover:scale-110"
          >
            <div className="text-4xl pt-2">
              <img src={icon.src} alt={icon.name} className="h-12 w-12" />
            </div>
            <p className="mt-2 text-white text-center">{icon.name}</p>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent hover:border-indigo-400 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
