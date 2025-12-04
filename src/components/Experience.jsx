import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Soft Height Multan',
      position: 'Full Stack Developer',
      period: 'Jun 2024 - Present',
      location: 'Multan, Pakistan',
      logo: '🚀',
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Developed scalable web apps using PHP, Laravel and JavaScript with integrated APIs and secure payments',
        'Built RESTful APIs, custom WordPress plugins, shortcodes, and widgets for dynamic functionality',
        'Created Telegram bots to automate tasks and enhance productivity',
        'Worked on Laravel admin dashboards with advanced data filtering and managing large data on tetheriq system',
        'Worked with Brevo APIs on Laravel system',
        'Built WordPress Payment Gateway plugins (Sticky, Konnektive etc) with 3DS Features',
        'Built Themes in WordPress and applied different patches according to client requirements',
        'Worked on Laravel POS Projects like apexcardservices.com, implemented Thirdweb payment gateways',
        'Worked with Konnektive and CheckoutChamp CRMs',
        'Worked with different Node.js projects for making API servers',
        'Deployed MERN Stack apps and Next.js applications on company VPS server',
        'Setup Emailing System on company VPS server using Postfix and Dovecot',
      ],
      projects: [
        'Tetheriq System - Laravel admin dashboard with advanced data filtering',
        'Apex Card Services - Laravel POS with Thirdweb payment gateway',
        'WordPress Payment Gateways - Custom plugins (Sticky, Konnektive) with 3DS',
        'Telegram Automation Bots - Task automation and productivity tools',
        'MERN & Next.js Deployments - Full-stack applications on VPS',
      ],
    },
    {
      company: 'Avenzaland PVT Limited (Websters Solution)',
      position: 'Junior Web and App Developer',
      period: 'Dec 2022 - Jun 2024',
      location: 'Multan, Pakistan',
      logo: '💼',
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Worked as a Frontend Designer with team for Avenzaland.com',
        'Worked and learnt Flutter app development for company\'s website backend management',
        'Worked mainly as a PHP and WordPress Developer',
        'Built the HRM dashboard, employee management system, Appointment system, and Role Based System',
      ],
      projects: [
        'Avenzaland.com - Frontend design and development',
        'HRM Dashboard - Employee management and role-based access system',
        'Appointment System - Booking and scheduling platform',
        'Flutter App - Company backend management mobile application',
      ],
    },
  ];

  const internship = {
    company: 'BZU Multan',
    position: 'Internship',
    period: 'August 2024 - September 2024',
    project: 'Task management system using Laravel',
  };

  return (
    <section id="experience" className="h-full overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 text-center">
          Professional Experience
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          My journey in software development and key contributions
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
          <div className="relative border-l-4 border-blue-500/50 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-8">
                <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-[14px] border-4 border-gray-900"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                      {exp.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-200">{exp.position}</h3>
                          <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-gray-400 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </p>
                        </div>
                        <span className="bg-blue-900/50 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Projects Section */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Key Projects
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-gray-700/30 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <span className="text-purple-400 text-sm">→</span>
                          <span className="text-sm text-gray-300">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Internship */}
          <div className="mb-10 ml-8">
            <div className="absolute w-6 h-6 bg-purple-500 rounded-full -left-[14px] border-4 border-gray-900"></div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-200">{internship.position}</h3>
                  <p className="text-xl text-purple-400 font-semibold">{internship.company}</p>
                </div>
                <span className="bg-purple-900/50 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-semibold">
                  {internship.period}
                </span>
              </div>
              <p className="text-gray-300">
                <span className="font-semibold">Project:</span> {internship.project}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
