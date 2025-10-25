import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaPowerOff, FaChartBar, FaCode, FaChartLine } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import Button from '../common/Button';
import FloatingElement from '../common/FloatingElement';

const SplitScreenHero = ({ activeSection, setActiveSection }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  const handleHoverEnd = () => {
    setHoveredSection(null);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <FloatingElement className="w-32 h-32 top-20 left-10" delay={0} />
      <FloatingElement className="w-24 h-24 bottom-32 right-20" delay={1} />
      <FloatingElement className="w-16 h-16 top-1/2 left-1/3" delay={2} />
      <FloatingElement className="w-20 h-20 top-3/4 right-1/4" delay={1.5} />

      <div className="flex h-full">
        {/* Development Side */}
        <motion.div
          className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
            hoveredSection === 'development' ? 'flex-[1.2]' : 'flex-1'
          }`}
          onMouseEnter={() => handleSectionHover('development')}
          onMouseLeave={handleHoverEnd}
          onClick={() => handleSectionClick('development')}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-sm" />
          <div className="relative z-10 text-center space-y-6 p-8">
            <motion.div 
              animate={{ 
                scale: hoveredSection === 'development' ? 1.2 : 1,
                y: hoveredSection === 'development' ? -10 : 0
              }} 
              transition={{ duration: 0.3 }}
            >
              <FaCode className="text-6xl text-blue-400 mx-auto mb-4" />
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold text-white"
              animate={{
                scale: hoveredSection === 'development' ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              Development
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-md"
              animate={{
                opacity: hoveredSection === 'development' ? 1 : 0.8,
              }}
            >
              Full-stack web & mobile applications with modern technologies
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-4 mt-6"
              animate={{ 
                opacity: hoveredSection === 'development' ? 1 : 0.7,
                scale: hoveredSection === 'development' ? 1.1 : 1
              }}
            >
              <FaReact className="text-3xl text-cyan-400" />
              <SiFlutter className="text-3xl text-blue-500" />
              <FaNodeJs className="text-3xl text-green-500" />
            </motion.div>
            
            {/* Hover-only button */}
            {hoveredSection === 'development' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the section click
                    handleSectionClick('development');
                  }}
                >
                  Enter Development Portfolio
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>

       
        {/* Data Analytics Side */}
        <motion.div
          className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
            hoveredSection === 'analytics' ? 'flex-[1.2]' : 'flex-1'
          }`}
          onMouseEnter={() => handleSectionHover('analytics')}
          onMouseLeave={handleHoverEnd}
          onClick={() => handleSectionClick('analytics')}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm" />
          <div className="relative z-10 text-center space-y-6 p-8">
            <motion.div 
              animate={{ 
                scale: hoveredSection === 'analytics' ? 1.2 : 1,
                y: hoveredSection === 'analytics' ? -10 : 0
              }} 
              transition={{ duration: 0.3 }}
            >
              <FaChartLine className="text-6xl text-purple-400 mx-auto mb-4" />
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold text-white"
              animate={{
                scale: hoveredSection === 'analytics' ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              Data Analytics
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-md"
              animate={{
                opacity: hoveredSection === 'analytics' ? 1 : 0.8,
              }}
            >
              Data-driven insights and visualization for business intelligence
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-4 mt-6"
              animate={{ 
                opacity: hoveredSection === 'analytics' ? 1 : 0.7,
                scale: hoveredSection === 'analytics' ? 1.1 : 1
              }}
            >
              <FaPython className="text-3xl text-yellow-500" />
              <FaPowerOff className="text-3xl text-yellow-400" />
              <FaChartBar className="text-3xl text-green-400" />
            </motion.div>
            
            {/* Hover-only button */}
            {hoveredSection === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 border-2 border-purple-400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the section click
                    handleSectionClick('analytics');
                  }}
                >
                  Enter Analytics Portfolio
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Central Call-to-Action */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p 
          className="text-gray-400 mb-2"
          animate={{
            scale: hoveredSection ? 1.1 : 1,
          }}
        >
          {hoveredSection ? `Click to explore ${hoveredSection}` : 'Hover or click to explore'}
        </motion.p>
        <div className="w-8 h-8 mx-auto border-2 border-gray-400 rounded-full animate-bounce flex items-center justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default SplitScreenHero;