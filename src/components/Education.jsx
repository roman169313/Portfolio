import React from 'react';

const Education = () => {
  const awards = [
    {
      title: 'Best Emerging Website Developer',
      description: 'Received Shield in December 2023',
      icon: '🏆',
    },
    {
      title: 'FYP Exhibition Winner',
      description: 'Secured first position in university FYP exhibition event "Code and Clash"',
      icon: '🥇',
    },
    {
      title: 'Quiz Competition Winner',
      description: 'Secured First Position in Quiz competition of event "Code and Clash"',
      icon: '🎯',
    },
    {
      title: 'Workshop Organizer',
      description: 'Organized a workshop of Website Development at Department Level',
      icon: '👨‍🏫',
    },
  ];

  const courses = [
    'Mobile Computing',
    'Object Oriented Programming',
    'Data Structures and Algorithms',
    'Web Engineering',
    'Database Systems',
    'Software Engineering',
  ];

  return (
    <section id="education" className="h-full overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 pb-64 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 text-center">
          Education & Achievements
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Academic background and recognitions
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 mb-12">
          <div className="flex flex-wrap justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-200 mb-2">
                Bachelor of Science in Computer Sciences
              </h3>
              <p className="text-xl text-blue-400 font-semibold mb-1">
                Bahauddin Zakariya University, Multan
              </p>
              <p className="text-gray-400">Multan, Pakistan</p>
            </div>
            <span className="bg-blue-900/50 text-blue-300 border border-blue-500/30 px-6 py-3 rounded-full text-lg font-semibold">
              2021 - 2025
            </span>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Key Courses:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700/30 border border-gray-600 px-4 py-3 rounded-lg flex items-center gap-2 hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-blue-400">✓</span>
                  <span className="text-gray-300 text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Honors */}
        <h3 className="text-2xl font-bold text-gray-200 mb-6 text-center">
          Honors & Awards
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/20 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{award.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-gray-300">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Note */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 mt-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📜</span>
            <div>
              <h4 className="text-xl font-bold text-gray-200 mb-1">Certifications</h4>
              <p className="text-gray-300">
                Continuously learning and obtaining certifications in web development, 
                cloud technologies, and modern frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
