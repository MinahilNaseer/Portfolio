import React from 'react';

const AboutMeSection = () => (
  <section className="bg-gray-900 text-white px-8 py-20 relative overflow-hidden">
    {/* Background shadow effect */}
    <div className="absolute inset-0 shadow-2xl shadow-green-500/10"></div>
    
    {/* Top border line */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
    
    <div className="relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          A passionate Software Engineering student with hands-on experience in building web and mobile applications using ReactJS and Flutter.
          Proficient in integrating machine learning models for real-world problems, particularly in educational and healthcare domains.
          Seeking roles that blend front-end development with AI/ML to deliver impactful, user-centered solutions.
        </p>
      </div>
    </div>
    
    {/* Bottom border line */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
  </section>
);

export default AboutMeSection;