import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'PHP', level: 90, color: 'bg-indigo-500' },
        { name: 'Laravel', level: 90, color: 'bg-red-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'Python', level: 75, color: 'bg-blue-600' },
        { name: 'Scikit-learn', level: 70, color: 'bg-orange-600' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'React', level: 85, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-pink-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
        { name: 'Bootstrap', level: 85, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, color: 'bg-orange-500' },
        { name: 'REST APIs', level: 90, color: 'bg-teal-500' },
        { name: 'WordPress', level: 90, color: 'bg-blue-700' },
        { name: 'Git/GitHub', level: 85, color: 'bg-gray-700' },
      ]
    },
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'VPS Management', icon: '�️' },
    { name: 'Telegram Bots', icon: '🤖' },
    { name: 'Payment Gateways', icon: '💳' },
    { name: 'CRM Systems', icon: '📊' },
    { name: 'Django', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
  ];

  return (
    <section id="skills" className="h-full overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-12 px-4 pb-64 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3 sm:mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4">
          Technologies and tools I work with to build robust applications
        </p>
      
        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-200">{category.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies - Mobile Optimized */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4 sm:mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">{tool.icon}</span>
                <span className="font-medium text-gray-300 text-xs sm:text-sm truncate">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
