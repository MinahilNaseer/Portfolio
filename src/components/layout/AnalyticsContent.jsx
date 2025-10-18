import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase } from 'react-icons/fa';
import AnalyticsHero from '../hero/AnalyticsHero';

const AnalyticsContent = () => (
  <div id="analytics-content" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <AnalyticsHero />
    
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Data Analytics Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300"
          whileHover={{ y: -5 }}
        >
          <FaChartLine className="text-4xl text-green-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Sales Dashboard</h3>
          <p className="text-gray-300">Interactive Power BI dashboard for sales performance analysis</p>
        </motion.div>
        
        <motion.div
          className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300"
          whileHover={{ y: -5 }}
        >
          <FaDatabase className="text-4xl text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Predictive Modeling</h3>
          <p className="text-gray-300">Machine learning models for customer behavior prediction</p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AnalyticsContent;