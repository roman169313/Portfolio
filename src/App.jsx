import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: <Hero />,
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    projects: <Projects />,
    education: <Education />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Full Screen Section Container with smooth transitions */}
      <div className="pt-16 h-screen w-full overflow-hidden">
        <div 
          key={activeSection} 
          className="h-full w-full animate-fade-in transition-all duration-500 ease-in-out"
        >
          {sections[activeSection]}
        </div>
      </div>

      {/* Mobile Navigation - Previous/Next/Home Buttons */}
      <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Footer - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm text-gray-400 py-2 sm:py-3 text-center text-xs sm:text-sm z-10 border-t border-gray-800">
        <p className="px-4">&copy; 2025 Roman Ahmad. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;

