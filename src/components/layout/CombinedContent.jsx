import React from "react";

import Hero from "../hero/Hero";
import AboutMeSection from "../sections/AboutMeSection";
import ProjectsSection from "../sections/ProjectsSection";
import AnalyticsProjectsSection from "../sections/AnalyticsProjectSection";
import TechStackSection from "../sections/TechStackSection";
import AnalyticsStackSection from "../sections/AnalyticsStackSection";
import ResumeSection from "../sections/ResumeSection";
import ContactFormSection from "../sections/ContactFormSection";
import Footer from "../sections/Footer";
import ResearchSection from "../sections/ResearchSection";

const CombinedContent = ({
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
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero */}
      <Hero
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />

      {/* About */}
      <AboutMeSection />

      {/* ========================= */}
      {/* SOFTWARE DEVELOPMENT */}
      {/* ========================= */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">
            Software Development
          </h2>

          <p className="text-center text-gray-400 mb-12">
            Full Stack, Mobile Development, AI Applications and Modern Web
            Technologies
          </p>

          <ProjectsSection
            ref={workRef}
            projects={projects}
            loading={loading}
            error={error}
          />

          <div className="mt-20">
            <TechStackSection />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* DATA ANALYTICS */}
      {/* ========================= */}

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">
            Data Analytics & AI
          </h2>

          <p className="text-center text-gray-400 mb-12">
            Machine Learning, Data Analysis, Power BI, SQL, Python and Business
            Intelligence
          </p>

          <AnalyticsProjectsSection />

          <div className="mt-20">
            <AnalyticsStackSection />
          </div>
        </div>
      </section>

      <ResearchSection />

      {/* Resume */}
      <ResumeSection ref={contactRef} />

      {/* Contact */}
      <ContactFormSection
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleSubmit={handleSubmit}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CombinedContent;