import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase } from 'react-icons/fa';
import AnalyticsHero from '../hero/AnalyticsHero';
import AnalyticsProjectsSection from '../sections/AnalyticsProjectSection';
import ResumeSection from '../sections/ResumeSection';
import ContactFormSection from '../sections/ContactFormSection';
import Footer from '../sections/Footer';
import AnalyticsStackSection from '../sections/AnalyticsStackSection';
import AboutMeSection from '../sections/AboutMeSection';

const AnalyticsContent = ({
  onBack,
  scrollToContact, 
  scrollToWork, 
  contactRef, 
  workRef,
  formData,
  setFormData,
  formStatus,
  handleSubmit,
}) => (
  <div id="analytics-content" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <AnalyticsHero scrollToContact={scrollToContact} scrollToWork={scrollToWork} onBack={onBack}/>
    <AboutMeSection />
    <AnalyticsProjectsSection ref={workRef} />
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