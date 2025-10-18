import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { techStack } from '../../data/techStack';

const DevelopmentHero = ({ scrollToContact, scrollToWork }) => {
  return (
    <motion.div
      className="h-screen px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1 className="text-6xl md:text-7xl font-extrabold leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Minahil Naseer</span>
        </motion.h1>
        
        <motion.div className="text-2xl md:text-3xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Software Engineer & Full-Stack Developer
          </span>
        </motion.div>

        <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          Crafting beautiful, performant web and mobile experiences with modern technologies. 
          Passionate about creating user-friendly applications that make a difference.
        </motion.p>

        <motion.div className="flex flex-col md:flex-row gap-6 justify-center mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg"
            onClick={scrollToContact}
          >
            <span className="flex items-center gap-2">💼 Hire Me</span>
          </Button>
          <Button 
            className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            onClick={scrollToWork}
          >
            <span className="flex items-center gap-2">🚀 See My Work</span>
          </Button>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-6 mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {techStack.slice(0, 6).map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent />
                <span className="text-xs mt-1">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevelopmentHero;