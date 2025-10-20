import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase } from 'react-icons/fa';
import AnalyticsHero from '../hero/AnalyticsHero';
import AnalyticsProjectsSection from '../sections/AnalyticsProjectSection';

const AnalyticsContent = () => (
  <div id="analytics-content" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <AnalyticsHero />
    <AnalyticsProjectsSection />
  </div>
);

export default AnalyticsContent;