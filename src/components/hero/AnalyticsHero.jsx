import React from 'react';
import { motion } from 'framer-motion';
import { analyticsStack } from '../../data/analyticsStack';
import { FaArrowLeft } from 'react-icons/fa';


const AnalyticsHero = ({onBack}) => {

   const handleBackClick = () => {
    if(onBack){
      onBack();
    }else{
      window.history.back();
    }
  };
  return (
    <motion.div
      className="h-screen px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
         <motion.button
        onClick={handleBackClick}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800/50 hover:bg-gray-700/50 p-3 rounded-full backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaArrowLeft className="text-lg" />
        <span className="text-sm font-medium">Back</span>
      </motion.button>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1 className="text-6xl md:text-7xl font-extrabold leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Data Analytics &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Business Intelligence</span>
        </motion.h1>
        
        <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Transforming raw data into actionable insights. Specializing in data visualization, 
          statistical analysis, and predictive modeling to drive business decisions.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-8 mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          {analyticsStack.map((tech, index) => {
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
    </motion.div>
  );
};

export default AnalyticsHero;