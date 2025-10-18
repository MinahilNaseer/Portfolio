import React from 'react';
import DevelopmentHero from '../hero/DevelpomentHero';
import AboutMeSection from '../sections/AboutMeSection';
import ProjectsSection from '../sections/ProjectsSection';
import TechStackSection from '../sections/TechStackSection';
import ResumeSection from '../sections/ResumeSection';
import ContactFormSection from '../sections/ContactFormSection';
import Footer from '../sections/Footer';

const DevelopmentContent = ({ 
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
  handleSubmit 
}) => (
  <div id="development-content" className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <DevelopmentHero scrollToContact={scrollToContact} scrollToWork={scrollToWork} />
    <AboutMeSection />
    <ProjectsSection ref={workRef} projects={projects} loading={loading} error={error} />
    <TechStackSection />
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

export default DevelopmentContent;