import React from 'react';
import { Code2, Database, Brain, Users } from 'lucide-react';
import AboutCard from './AboutCard';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend development, specializing in Django, Node.js, and React. Skilled in creating scalable web applications with modern architectures."
    },
    {
      icon: Database,
      title: "Database & API Design",
      description: "Proficient in database design and management using PostgreSQL, MySQL, and Redis. Expert in creating secure and efficient RESTful APIs with comprehensive documentation."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures and Algorithms with active participation on LeetCode. Experienced in optimizing application performance and solving complex technical challenges."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Proven track record of working effectively in collaborative environments, contributing to multiple projects simultaneously while maintaining high-quality standards."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Professional Background</h2>
        
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            I'm a passionate software developer specializing in crafting scalable, high-performance web applications. 
            With expertise in both frontend and backend development, I leverage modern technologies to create robust 
            solutions that drive business success.
          </p>
          
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Currently focused on building microservices architectures and real-time applications using Node.js, 
            TypeScript, and React. I'm always eager to tackle new challenges and contribute to innovative projects 
            that push the boundaries of what's possible in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <AboutCard
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}