import React from 'react';

const Particles = () => {
  // Predefined particles with varied properties
  const particles = [
    { id: 0, size: 3, left: 10, duration: 15, delay: 0 },
    { id: 1, size: 2, left: 25, duration: 18, delay: 2 },
    { id: 2, size: 4, left: 40, duration: 12, delay: 1 },
    { id: 3, size: 3, left: 55, duration: 20, delay: 3 },
    { id: 4, size: 2, left: 70, duration: 16, delay: 0.5 },
    { id: 5, size: 5, left: 85, duration: 14, delay: 2.5 },
    { id: 6, size: 3, left: 5, duration: 19, delay: 1.5 },
    { id: 7, size: 4, left: 20, duration: 13, delay: 3.5 },
    { id: 8, size: 2, left: 35, duration: 17, delay: 0.8 },
    { id: 9, size: 3, left: 50, duration: 15, delay: 2.2 },
    { id: 10, size: 4, left: 65, duration: 11, delay: 1.8 },
    { id: 11, size: 2, left: 80, duration: 18, delay: 3.2 },
    { id: 12, size: 3, left: 95, duration: 14, delay: 0.3 },
    { id: 13, size: 5, left: 15, duration: 16, delay: 2.8 },
    { id: 14, size: 2, left: 30, duration: 19, delay: 1.2 },
    { id: 15, size: 4, left: 45, duration: 13, delay: 3.8 },
    { id: 16, size: 3, left: 60, duration: 17, delay: 0.6 },
    { id: 17, size: 2, left: 75, duration: 15, delay: 2.5 },
    { id: 18, size: 5, left: 90, duration: 12, delay: 1.3 },
    { id: 19, size: 3, left: 8, duration: 20, delay: 3.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-t from-blue-400/30 to-purple-400/30 animate-float blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '-10px',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
