import React from 'react';

const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '18+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="h-full overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-12 px-4 pb-48 md:pb-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white">
          About Me
        </h2>
        
        {/* Stats Section - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
            With 4 years of hands-on experience in software development, I've been involved in building and improving web applications that focus on usability and performance. Through real-world projects, I've learned how to approach problems logically, write clean and maintainable code, and contribute effectively within a team.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
            I enjoy being part of the development process from planning to deployment and always look for opportunities to improve my skills and stay updated with new technologies.
          </p>
          
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interests
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>• Coding & Problem Exploring</li>
                <li>• Technology & Research</li>
                <li>• Process Improvement</li>
                <li>• Creativity & Development</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hobbies
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Photography</li>
                <li>• Reading</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-200 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Languages
            </h3>
            <div className="flex gap-4 text-gray-400">
              <span>English</span>
              <span>•</span>
              <span>Urdu</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
