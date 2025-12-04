import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👤' },
    { name: 'Skills', id: 'skills', icon: '💻' },
    { name: 'Experience', id: 'experience', icon: '💼' },
    { name: 'Projects', id: 'projects', icon: '🚀' },
    { name: 'Education', id: 'education', icon: '🎓' },
    { name: 'Contact', id: 'contact', icon: '📧' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <button
            onClick={() => setActiveSection('home')}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="hidden sm:inline">Roman Ahmad</span>
            <span className="sm:hidden">RA</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm lg:text-base ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-base lg:text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 hover:bg-gray-800 rounded-lg active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 active:scale-95 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                } ${isOpen ? 'animate-slide-up' : ''}`}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
