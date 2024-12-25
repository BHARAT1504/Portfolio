import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© 2024 Bharat Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;