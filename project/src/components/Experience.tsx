import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Aarrsol Pvt Ltd",
    position: "Application Developer",
    period: "October 2024 - Present",
    responsibilities: [
      "Started as a backend intern, learned Node.js, MySQL, TypeScript, and JavaScript",
      "Worked with the team as a backend developer to provide optimized APIs",
      "Created models and DB Diagrams to ensure correct blueprint of the database",
      "Worked on multiple projects parallely to meet multiple client's requirements",
      "Implemented Redis caching to improve application performance",
      "Worked on a Ludo game project, implementing key functionalities using TypeScript",
      "Managed post-deployment exceptions and implemented comprehensive logging",
      "Debugged and resolved issues to ensure smooth functionality"
    ]
  },
  {
    company: "Auriga IT | Auriga One",
    position: "Developer",
    period: "April 2024 - June 2024",
    responsibilities: [
      "Designed and developed RESTful APIs for various project modules",
      "Deployed Swagger to enhance code quality and API documentation",
      "Managed post-deployment exceptions and implemented comprehensive logging",
      "Utilized Git for efficient source code management and version control"
    ]
  },
  {
    company: "Event Management",
    position: "Full Stack Developer",
    period: "Jan 2024 - April 2024",
    responsibilities: [
      "Developed a web application for event management using Django, React, and PostgreSQL",
      "Implemented REST APIs for user registration, login, and password management",
      "Integrated role-based access control and administration module",
      "Conducted thorough testing of APIs using Postman",
      "Integrated chat functionality for enhanced collaboration"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-blue-900" />
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-900 transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full" />
              <div className="bg-white rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900">{exp.company}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <p className="text-lg text-gray-700 mt-2">{exp.position}</p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2 text-blue-900">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}