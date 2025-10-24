import React from 'react';
import { motion } from 'framer-motion';
import { analyticsStack } from '../../data/analyticsStack';

const AnalyticsStackSection = () => (
  <section className="bg-gray-900 text-white px-8 py-20">
    <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Analytics Tech Stack</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
      {analyticsStack.map((tech, index) => {
        // Skip items that don't have an icon (like the certifications category)
        if (!tech.icon || tech.category) {
          return null;
        }
        
        const IconComponent = tech.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-purple-400 text-4xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent />
            <p className="text-white text-sm mt-2">{tech.name}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default AnalyticsStackSection;