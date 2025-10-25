import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className, onClick, ...props }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button;