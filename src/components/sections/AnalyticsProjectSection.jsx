import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaFilePdf, FaImage, FaVideo, FaTools, FaPlay, FaPause, FaExpand, FaTimes } from 'react-icons/fa';
import { getAnalyticsProjectsFromFirebase } from '../../services/firebaseAnalyticsService';
import { developmentExperience, analyticsExperience } from '../../data/experienceData';
import { developmentCertifications, analyticsCertifications } from '../../data/certificationsData';

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

// FIXED: Correct component definition with forwardRef
const AnalyticsProjectsSection = React.forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const firebaseProjects = await getAnalyticsProjectsFromFirebase();
        const transformedProjects = firebaseProjects.map(project => ({
          id: project.id,
          title: project.title,
          description: project.description,
          category: project.category,
          imageUrl: project.imageUrl || "/images/default-project.png",
          videoUrl: project.videoUrl,
          githubUrl: project.githubUrl,
          linkedinUrl: project.linkedinUrl,
          tools: project.tools || [],
          insights: project.insights || [],
          features: project.features || [],
          hasVideo: project.hasVideo || false,
          hasImage: project.hasImage || false,
          displayOrder: project.displayOrder || 999
        }));
        transformedProjects.sort((a, b) => a.displayOrder - b.displayOrder);

        setProjects(transformedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = entry.target.dataset.videoId;
          if (entry.isIntersecting) {
            if (videoRefs.current[videoId] && playingVideo !== videoId) {
              videoRefs.current[videoId].play().catch(console.error);
              setPlayingVideo(videoId);
            }
          } else {
            if (videoRefs.current[videoId] && playingVideo === videoId) {
              videoRefs.current[videoId].pause();
              setPlayingVideo(null);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach(video => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [projects, playingVideo]);

  const handleVideoPlay = (projectId) => {
    const video = videoRefs.current[projectId];
    if (!video) return;

    if (playingVideo === projectId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo].pause();
      }
      video.play().catch(console.error);
      setPlayingVideo(projectId);
    }
  };

  const handleVideoEnd = (projectId) => {
    const video = videoRefs.current[projectId];
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
    }
  };

  const handleEnlargeImage = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-1/2 mx-auto mb-16"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-800 rounded-2xl p-6 h-96">
                  <div className="h-48 bg-gray-700 rounded mb-4"></div>
                  <div className="h-6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-400 text-xl mb-4">⚠️ {error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Data Analytics Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming raw data into actionable insights through advanced analytics,
            visualization, and machine learning
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No projects found. Please check your Firebase configuration.
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-700 group"
                >
                  {/* Media Section */}
                  <div className="relative h-70 bg-gradient-to-br from-green-900/20 to-teal-900/20 overflow-hidden">
                    {project.hasVideo && project.videoUrl ? (
                      <>
                        <video
                          ref={(el) => (videoRefs.current[project.id] = el)}
                          data-video-id={project.id}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          onEnded={() => handleVideoEnd(project.id)}
                          poster={project.imageUrl}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </>
                    ) : (
                      // Fallback for projects without video
                      <div className="w-full h-full flex items-center justify-center">
                        {project.hasImage ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`text-center p-8 ${project.hasImage ? 'hidden' : 'flex flex-col items-center'}`}>
                          <FaTools className="text-6xl text-green-400 mb-4 opacity-60" />
                          <p className="text-green-300 text-lg font-semibold">
                            {project.title}
                          </p>
                          <p className="text-green-200 text-sm mt-2">
                            Technical Analysis
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Media Type Indicator */}
                    <div className="absolute top-4 right-4">
                      {project.hasVideo ? (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center">
                          <FaVideo className="mr-1" />
                          Video Demo
                        </span>
                      ) : project.hasImage ? (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs flex items-center">
                          <FaImage className="mr-1" />
                          Visualization
                        </span>
                      ) : (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs flex items-center">
                          <FaTools className="mr-1" />
                          Analysis
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Insights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">KEY INSIGHTS</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {project.insights.slice(0, 3).map((insight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">TOOLS & TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex space-x-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            <FaGithub className="text-xl mr-2" />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                        {project.linkedinUrl && (
                          <a
                            href={project.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                          >
                            <FaLinkedin className="text-xl mr-2" />
                            <span className="text-sm">Post</span>
                          </a>
                        )}
                      </div>

                      <a
                        href={project.githubUrl || project.linkedinUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-semibold"
                      >
                        Explore Project
                        <FaExternalLinkAlt className="ml-2 text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 flex flex-wrap justify-center gap-10 text-center"
            >
              <div className="bg-gray-800 rounded-xl p-6 w-48">
                <div className="text-3xl font-bold text-green-400 mb-2">{projects.length}+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 w-48">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {projects.filter(p => p.hasVideo).length}+
                </div>
                <div className="text-gray-300">Video Demos</div>
              </div>
            </motion.div>
          </>
        )}

        {/* Experience & Certifications for Analytics */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Analytics Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-green-400">Analytics Experience</h3>
              <div className="space-y-6">
                {analyticsExperience.map((exp, index) => (
                  <ExperienceCard
                    key={exp.id}
                    exp={exp}
                    onEnlarge={handleEnlargeImage}
                  />
                ))}
              </div>
            </motion.div>

            {/* Analytics Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-green-400">Analytics Certifications</h3>
              <div className="space-y-6">
                {analyticsCertifications.map((cert, index) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    onEnlarge={handleEnlargeImage}
                  />
                ))}
              </div>
            </motion.div>
          </div>
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

export default AnalyticsProjectsSection;