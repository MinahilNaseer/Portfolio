import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = React.forwardRef(({ projects, loading, error }, ref) => (
  <section className="px-8 py-20" ref={ref}>
    <h2 className="text-4xl font-bold text-center mb-12">Projects Worked On</h2>
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
  </section>
));

export default ProjectsSection;