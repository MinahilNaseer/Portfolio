import React from 'react';
import { motion } from 'framer-motion';

const TechIcons = ({ 
  techList, 
  className = "", 
  iconSize = "text-2xl", 
  showNames = true,
  hoverEffect = true 
}) => {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {techList.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={hoverEffect ? { scale: 1.2, y: -5 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent className={`${iconSize} mb-1`} />
            {showNames && (
              <span className="text-xs mt-1">{tech.name}</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Specific component for development tech stack
export const DevTechIcons = ({ className = "", ...props }) => {
  const { techStack } = require('../../data/techStack');
  return <TechIcons techList={techStack} className={className} {...props} />;
};

// Specific component for analytics tech stack
export const AnalyticsTechIcons = ({ className = "", ...props }) => {
  const { analyticsStack } = require('../../data/analyticsStack');
  return <TechIcons techList={analyticsStack} className={className} {...props} />;
};

export default TechIcons;