import React from 'react';
import { motion } from 'framer-motion';
import { developmentExperience, analyticsExperience } from '../../data/experienceData';
import { developmentCertifications, analyticsCertifications } from '../../data/certificationsData';

// Add activeTab to the props destructuring
const ProjectsSection = React.forwardRef(({ projects, loading, error, activeTab }, ref) => (
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
                e.target.src = '/images/placeholder.jpg'; // Fallback image
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
          <motion.div
            key={exp.id}
            className="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-xl font-bold text-white">{exp.role}</h4>
              <span className="text-green-400 text-sm font-semibold">{exp.period}</span>
            </div>
            <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            {exp.certificate && (
              <div className="mt-4 text-sm text-gray-400">
                Certificate: {exp.certificate}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Certifications Section - Removed the increased margin from here */}
    <div>
      <h3 className="text-3xl font-bold text-center mb-12">
        {activeTab === 'development' ? 'Development Certifications' : 'Data Analytics Certifications'}
      </h3>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {(activeTab === 'development' ? developmentCertifications : analyticsCertifications).map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-bold text-white">{cert.title}</h4>
              <span className="text-green-400 text-sm font-semibold">{cert.date}</span>
            </div>
            <p className="text-gray-300 font-medium mb-3">{cert.issuer}</p>
            {cert.description && (
              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-3">
              {cert.skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
            {cert.file && (
              <div className="text-sm text-gray-400">
                File: {cert.file}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));

export default ProjectsSection;