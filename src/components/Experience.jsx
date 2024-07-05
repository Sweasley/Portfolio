import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Student Assistant",
      company: "NU Laguna l Calamba, Laguna",

      description: (
        <ul className="list-disc list-inside">
          <li>
            Organized and maintained filing system to keep documentation easily
            accessible.
          </li>
          <li>
            Helped with administrative support by managing incoming calls,
            coordinating files, and sorting mail.
          </li>
          <li>
            Communicated effectively with faculty and staff, accepting critiques
            and suggestions for improvement.
          </li>
        </ul>
      ),
      duration: "March 2023 - September 2023",
      skills: [
        "Organizational Skills",
        "Administrative Support",
        "Communication",
      ],
    },
    {
      title: "Content Loader Intern",
      company:
        "Essilor Shared Services Philippines Incorporated l Alabang, Muntinlupa",
      description: (
        <ul className="list-disc list-inside">
          <li>Attended daily scrum meetings.</li>
          <li>Used Jira for project management.</li>
          <li>Utilized CoreMedia for Content Management System (CMS).</li>
          <li>Learned Agile methodology.</li>
          <li>Managed time effectively within 2-week sprints.</li>
          <li>Accurately replicated websites from a main source.</li>
        </ul>
      ),
      duration: "Jan 2024 - May 2024",
      skills: ["Jira", "CoreMedia CMS", "Agile Methodology", "Time Management"],
    },

    // Add more entries as needed
  ];

  return (
    <section className="bg-black text-white py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8 text-center ">
          <span className="grad-text primary-color">Experience</span>
        </h2>
        <div className="grid gap-8">
          {experienceData.map((experience, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="text-blue-500">{experience.title}</span>{" "}
                <span className="text-gray-400">at</span>{" "}
                <span className="text-blue-500">{experience.company}</span>
              </h3>
              <div className="text-gray-300 mb-2">{experience.description}</div>
              <p className="text-gray-400 mb-2">{experience.duration}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className=" box-item  px-3 py-1 rounded border border-gray-600"
                  >
                    <p className="text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
