import React from "react";
const Education = () => {
  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 primary-color grad-text">
            Education
          </h2>
          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Senior High School */}
          <div className="education-item bg-gradient-to-br bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-950 mb-2">
              STI COLLEGE CALAMBA
            </h3>
            <h4 className="text-lg font-bold text-slate-950  mb-2">
              Information Technology in Mobile Application and Web Development
              (ITMAWD)
            </h4>
            <p className="text-slate-950  mb-2">School</p>
            <p className="text-slate-950  mb-2">2020</p>
          </div>
          {/* College Level */}
          <div className="education-item bg-gradient-to-br bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-950  mb-2">
              National University Laguna
            </h3>
            <h4 className="text-lg font-bold text-slate-950  mb-2">
              Bachelor of Information Systems
            </h4>
            <p className="text-slate-950  mb-2">University</p>
            <p className="text-slate-950  mb-2">2020 - 2024</p>
          </div>
          {/* Add more education entries as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
