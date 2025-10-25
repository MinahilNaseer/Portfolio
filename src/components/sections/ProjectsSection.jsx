import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developmentExperience, analyticsExperience } from '../../data/experienceData';
import { developmentCertifications, analyticsCertifications } from '../../data/certificationsData';
import { FaExpand, FaTimes, FaFilePdf } from 'react-icons/fa';

// Image Modal Component
const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <FaTimes className="text-2xl" />
        </button>
        <img
          src={imageUrl}
          alt="Enlarged certificate"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

// Certificate Card Component
const CertificateCard = ({ cert, onEnlarge }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
      {/* Certificate Image */}
      {cert.image && (
        <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-700">
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            onClick={() => onEnlarge(cert.image)}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center flex-col">
            <FaFilePdf className="text-4xl text-gray-400 mb-2" />
            <span className="text-gray-400 text-sm">Certificate Image</span>
          </div>

          {/* Enlarge Button */}
          <button
            onClick={() => onEnlarge(cert.image)}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
          >
            <FaExpand className="text-sm" />
          </button>
        </div>
      )}

      {/* Certificate Details */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
        <span className="text-green-400 text-sm font-semibold">{cert.date}</span>
      </div>
      <p className="text-gray-300 font-medium mb-3">{cert.issuer}</p>
      {cert.description && (
        <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill, i) => (
          <span key={i} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Experience Card Component with Certificate
const ExperienceCard = ({ exp, onEnlarge }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500 group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
        <span className="text-green-400 text-sm font-semibold">{exp.period}</span>
      </div>
      <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
      <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
      <p className="text-gray-300 mb-4">{exp.description}</p>

      {/* Experience Certificate Image */}
      {exp.certificate && (
        <div className="mt-4 mb-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-700">
            <img
              src={exp.certificate}
              alt={`${exp.role} certificate`}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              onClick={() => onEnlarge(exp.certificate)}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 items-center justify-center flex-col">
              <FaFilePdf className="text-3xl text-gray-400 mb-2" />
              <span className="text-gray-400 text-sm">Experience Certificate</span>
            </div>

            {/* Enlarge Button */}
            <button
              onClick={() => onEnlarge(exp.certificate)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
            >
              <FaExpand className="text-sm" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill, i) => (
          <span key={i} className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Add activeTab to the props destructuring
const ProjectsSection = React.forwardRef(({ projects, loading, error, activeTab }, ref) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleEnlargeImage = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  return (
    <section className="px-8 py-20" ref={ref}>
      <h2 className="text-4xl font-bold text-center mb-12">
        {activeTab === 'development' ? 'Development Projects' : 'Analytics Projects'}
      </h2>
      <div className="flex flex-col gap-20">
        {loading && <p className="text-center text-gray-400">Loading projects...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {/* Add this check for empty projects */}
        {projects.length === 0 && !loading && !error && (
          <p className="text-center text-gray-400">No projects found.</p>
        )}

        {projects.map((proj, i) => (
          <motion.div
            key={proj.id || i}
            className={`flex flex-col md:flex-row items-start bg-gray-900 p-8 rounded-xl shadow-lg md:space-x-8 ${proj.isMobile ? 'md:items-center' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {proj.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full md:w-1/2 h-auto rounded-md shadow-md"
              >
                <source src={proj.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={proj.image}
                alt={proj.title || 'Project image'}
                className={`rounded-md shadow-md hover:scale-105 transition-transform ${proj.isMobile ? 'w-[220px] md:w-[220px] md:mr-0 mx-auto mb-4' : 'w-full md:w-1/2 md:mr-6'}`}
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            )}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h3 className="text-3xl font-bold mb-4 tracking-tight leading-snug">
                {proj.title || 'Untitled Project'}
              </h3>
              {proj.description && (
                <p className="text-base text-gray-300 mb-4 leading-relaxed">
                  {proj.description}
                </p>
              )}
              {proj.stack?.length > 0 && (
                <ul className="text-sm text-gray-400 list-disc ml-5 mb-4">
                  {proj.stack.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 font-semibold hover:underline hover:text-indigo-300 transition-colors"
                >
                  Explore this project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mt-32 mb-32">
        <h3 className="text-3xl font-bold text-center mb-12">
          {activeTab === 'development' ? 'Development Experience' : 'Data Analytics Experience'}
        </h3>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {(activeTab === 'development' ? developmentExperience : analyticsExperience).map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              onEnlarge={handleEnlargeImage}
            />
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-12">
          {activeTab === 'development' ? 'Development Certifications' : 'Data Analytics Certifications'}
        </h3>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {(activeTab === 'development' ? developmentCertifications : analyticsCertifications).map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onEnlarge={handleEnlargeImage}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <ImageModal
            imageUrl={enlargedImage}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
});

export default ProjectsSection;