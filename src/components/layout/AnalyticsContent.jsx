import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase } from 'react-icons/fa';
import AnalyticsHero from '../hero/AnalyticsHero';
import AnalyticsProjectsSection from '../sections/AnalyticsProjectSection';
import ResumeSection from '../sections/ResumeSection';
import ContactFormSection from '../sections/ContactFormSection';
import Footer from '../sections/Footer';
import AnalyticsStackSection from '../sections/AnalyticsStackSection';

const AnalyticsContent = ({
  onBack,
  scrollToContact, 
  scrollToWork, 
  projects, 
  loading, 
  error, 
  contactRef, 
  workRef,
  formData,
  setFormData,
  formStatus,
  handleSubmit,
}) => (
  <div id="analytics-content" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <AnalyticsHero onBack={onBack}/>
    <AnalyticsProjectsSection />
    <AnalyticsStackSection />
    <ResumeSection ref={contactRef} />
        <ContactFormSection 
          formData={formData}
          setFormData={setFormData}
          formStatus={formStatus}
          handleSubmit={handleSubmit}
        />
    <Footer />
  </div>
);

export default AnalyticsContent;