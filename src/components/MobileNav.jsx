import React, { useEffect } from 'react';

const MobileNav = ({ activeSection, setActiveSection }) => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  
  const currentIndex = sections.indexOf(activeSection);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;
  
  // Smooth scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);
  
  const goToPrevious = () => {
    if (hasPrevious) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };
  
  const goToNext = () => {
    if (hasNext) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };
  
  const goToHome = () => {
    setActiveSection('home');
  };

  // Section names for display
  const sectionNames = {
    home: 'Home',
    about: 'About Me',
    skills: 'My Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact Me'
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      {/* Floating Navigation Bar */}
      <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-2xl">
        <div className="px-4 py-3">
          {/* Enhanced Current Section Indicator */}
          <div className="text-center mb-3 animate-fade-in">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Current Section</p>
            <p className="text-lg font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              {sectionNames[activeSection]}
            </p>
            <div className="mt-1 text-xs text-gray-400">
              {currentIndex + 1} of {sections.length}
            </div>
          </div>
          
          {/* Navigation Buttons with smooth transitions */}
          <div className="flex items-center justify-between gap-3">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={!hasPrevious}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                hasPrevious
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white active:scale-95 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-x-1'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Previous</span>
            </button>

            {/* Home Button */}
            <button
              onClick={goToHome}
              className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                activeSection === 'home'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-110'
                  : 'bg-gray-800 text-gray-300 active:scale-95 hover:bg-gray-700 hover:scale-105'
              }`}
              aria-label="Go to home"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                hasNext
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white active:scale-95 hover:shadow-lg hover:shadow-purple-500/50 transform hover:translate-x-1'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-sm">Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Enhanced Progress Indicator with smooth transitions */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`transition-all duration-300 ease-in-out ${
                  activeSection === section
                    ? 'w-8 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50'
                    : 'w-2 h-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-125'
                }`}
                aria-label={`Go to ${sectionNames[section]}`}
                title={sectionNames[section]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
