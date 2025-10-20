import React, { useEffect, useRef, useState } from "react";
import { db } from '../src/firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { getProjects } from "./services/projects";
import emailjs from '@emailjs/browser';
import SplitScreenHero from './components/hero/SplitScreenHero';
import DevelopmentContent from './components/layout/DevelopmentContent';
import AnalyticsContent from './components/layout/AnalyticsContent';
import { initializeAnalyticsProjects } from './services/firebaseAnalyticsService';

const PortfolioLanding = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contactRef = useRef(null);
  const workRef = useRef(null);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: 'smooth' });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: new Date(),
      });

      await emailjs.send(
        "service_2ewf699",
        "template_jnkopz9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Portfolio Message"
        },
        "amLjy0aJPn-6EyT4h"
      );

      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS or Firestore error:", error);
      setFormStatus("Failed to send message.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add this new useEffect for initializing analytics projects
  useEffect(() => {
    // This will automatically upload your projects to Firebase on first load
    initializeAnalyticsProjects();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {activeSection === null && <SplitScreenHero activeSection={activeSection} setActiveSection={setActiveSection} />}
      {activeSection === 'development' && (
        <DevelopmentContent
          scrollToContact={scrollToContact}
          scrollToWork={scrollToWork}
          projects={projects}
          loading={loading}
          error={error}
          contactRef={contactRef}
          workRef={workRef}
          formData={formData}
          setFormData={setFormData}
          formStatus={formStatus}
          handleSubmit={handleSubmit}
        />
      )}
      {activeSection === 'analytics' && <AnalyticsContent />}
    </div>
  );
}

export default PortfolioLanding;