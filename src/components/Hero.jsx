import React from 'react';
import Particles from './Particles';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Floating Particles */}
      <Particles />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image - Responsive sizing */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 ring-4 ring-blue-500/20 hover:ring-8 hover:ring-blue-500/30 transition-all duration-300">
                <img 
                  src="./assets/profile.jpeg" 
                  alt="Roman Ahmad" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Roman&backgroundColor=3B82F6";
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-gray-900 animate-pulse"></div>
            </div>
          </div>
          
          {/* Name - Responsive text sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-2">
            Roman Ahmad
          </h1>
          
          {/* Title - Responsive */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-3 sm:mb-4 px-4">
            Full Stack Developer
          </h2>
          
          {/* Description - Responsive with better mobile readability */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            With 4 years of hands-on experience in building scalable web applications using PHP, Laravel, JavaScript, React, and Node.js
          </p>
          
          {/* CTA Buttons - Responsive grid on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <a
              href="tel:+923249127603"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">+92-324-9127603</span>
            </a>
            <a
              href="mailto:roman169313@gmail.com"
              className="bg-gray-800 border border-gray-700 text-gray-200 px-6 py-3 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-700 hover:shadow-lg active:scale-95 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>

          {/* Social Links - Responsive spacing */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/roman169313"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 transform p-2 hover:bg-gray-800/50 rounded-full"
              aria-label="GitHub Profile"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/roman-ahmad-9747321b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 transform p-2 hover:bg-gray-800/50 rounded-full"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
