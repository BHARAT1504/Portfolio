import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm Bharat Kumar
          </h1>
          <h2 className="text-3xl mb-8 text-blue-200">
            Full Stack Developer specializing in Django & Node.js
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl">
            I craft scalable web applications and bring innovative solutions to life. 
            Currently building exciting projects with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="mailto:kbchoudhary143@gmail.com" 
              className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail size={20} /> Let's Talk
            </a>
            <div className="flex gap-4 ml-4">
              <a 
                href="https://www.linkedin.com/in/bharat-kumar-5a71b21b4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/bkumar_1504/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}