import React from 'react';

const Projects = () => {
  const fyp = {
    title: 'Deep Fake Detection Of Multimedia using Digital Forensics',
    description: 'Developed a Web Based application capable of detecting deep fake media using Deep learning techniques.',
    technologies: ['Django', 'MySQL', 'TensorFlow', 'Keras', 'OpenCV', 'Librosa', 'Python'],
    features: [
      'Detects deep fakes in audio, video, and image files',
      'Gives immediate feedback to the user with a report on the authenticity of the uploaded media',
      'Uses Deep Learning models trained on multiple datasets',
    ],
    datasets: [
      'Deep Fake Detection (Videos)',
      '140K Real and Fake Faces (Images)',
      'Urdu Deep Fake Audio (HuggingFace)',
    ],
  };

  const semesterProjects = [
    {
      title: 'Smart Attendance System',
      tech: 'Laravel + Face Recognition API',
      icon: '👤',
    },
    {
      title: 'E-Commerce Inventory Manager',
      tech: 'PHP + REST API + JavaScript + Laravel',
      icon: '🛒',
    },
    {
      title: 'Student Management System',
      tech: 'C# .NET Framework',
      icon: '🎓',
    },
    {
      title: 'Chat Application',
      tech: 'React Native',
      icon: '💬',
    },
  ];

  const professionalProjects = [
    {
      title: 'Tetheriq System',
      description: 'Laravel admin dashboard with advanced data filtering for managing large datasets',
      icon: '📊',
    },
    {
      title: 'Apex Card Services',
      description: 'Laravel POS Project with Thirdweb payment gateway integration',
      icon: '💳',
    },
    {
      title: 'WordPress Payment Gateways',
      description: 'Custom payment gateway plugins (Sticky, Konnektive) with 3DS features',
      icon: '💰',
    },
    {
      title: 'Telegram Automation Bots',
      description: 'Built bots to automate tasks and enhance productivity',
      icon: '🤖',
    },
  ];

  return (
    <section id="projects" className="h-full overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 pb-48 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 text-center">
          Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Featured work and accomplishments
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
          {/* Final Year Project */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏆</span>
              <h3 className="text-3xl font-bold text-gray-200">Final Year Project</h3>
            </div>
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">{fyp.title}</h4>
            <p className="text-gray-300 mb-6 text-lg">{fyp.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="font-semibold text-gray-200 mb-3 text-lg">Core Features:</h5>
              <ul className="space-y-2 text-gray-300">
                {fyp.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-200 mb-3 text-lg">Datasets Used:</h5>
              <ul className="space-y-2 text-gray-300">
                {fyp.datasets.map((dataset, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{dataset}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-200 mb-3 text-lg">Technologies:</h5>
            <div className="flex flex-wrap gap-2">
              {fyp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700/50 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Projects */}
        <h3 className="text-2xl font-bold text-gray-200 mb-6">Professional Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {professionalProjects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h4 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h4>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Company Projects Note */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 mb-12">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💼</span>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Additional Company Projects</h4>
              <p className="text-gray-300 text-base leading-relaxed">
                Many more projects have been completed during my professional experience at various companies. 
                These projects are not listed here due to confidentiality agreements and proprietary considerations. 
                <span className="text-blue-300 font-medium"> Available to discuss in detail during interviews.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Semester Projects */}
        <h3 className="text-2xl font-bold text-gray-200 mb-6">Academic Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesterProjects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">{project.icon}</div>
              <h4 className="text-lg font-bold text-gray-200 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-400">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
