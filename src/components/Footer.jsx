import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400" id="Footer">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <span className="text-3xl font-bold primary-color grad-text">
            Wesley Dyron C. Gimutao
          </span>
          <p className="mt-2 text-gray-500">weasleydyron.gimutao@gmail.com</p>
          <p className="mt-2 text-gray-500">#Web Developer</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/in/wesley-dyron-gimutao-26829225a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          {/* Facebook icon */}
          <a
            href="https://www.facebook.com/"
            T
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebook className="text-3xl" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-right w-full md:w-auto">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 mb-2">Contact me:</p>
            <p className="text-white font-bold text-lg">+639611257382</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
