import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm ${className}`}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export default FloatingElement;