import React from 'react';
import { Code, Database, Wrench, Server } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript"]
  },
  {
    icon: Server,
    title: "Technologies",
    skills: ["REST APIs", "Django", "AWS", "Node.js", "Express.js", "RabbitMQ", "WebSocket"]
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Swagger", "Docker", "VS Code", "PyCharm", "Postman", "Git", "Bitbucket", "Jira"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <category.icon className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}