import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaExternalLinkAlt,
  FaFilePdf,
  FaAward,
} from "react-icons/fa";

const publication = {
  title:
    "AI-powered Mobile-based Early Screening System for Learning Difficulties in Children using Deep Learning and Machine Learning",

  journal: "Discover Computing (Springer Nature)",

  year: "2026",

  authors:
    "Minahil Naseer, Hamna Kashif, Kashif Sultan, Hina Ghafoor, Awais Majeed, Prince Semba Yawada",

  doi: "https://doi.org/10.1007/s10791-026-10282-y",

  pdf: "/research/research-paper.pdf", // Put your paper in public/research/

  description:
    "Designed and developed an AI-powered mobile application for early screening of Dyslexia, Dysgraphia, and Dyscalculia using Deep Learning (VGG16 CNN), Machine Learning, and interactive gamified assessments.",

  technologies: [
    "Flutter",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "VGG16",
    "CNN",
    "Firebase",
    "Computer Vision",
    "Artificial Intelligence",
  ],
};

const ResearchSection = () => {
  return (
    <section className="bg-gray-900 px-8 py-20 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Research Publications
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            My published research focuses on Artificial Intelligence,
            Deep Learning and Machine Learning applications for educational
            technology and early learning disability screening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all"
        >

          <div className="flex items-center gap-3 mb-4">
            <FaAward className="text-green-400 text-3xl" />

            <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              Published Research
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            {publication.title}
          </h3>

          <p className="text-gray-300 mb-3">
            <strong>Authors:</strong> {publication.authors}
          </p>

          <p className="text-green-400 font-semibold mb-1">
            {publication.journal}
          </p>

          <p className="text-gray-400 mb-6">
            Published • {publication.year}
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            {publication.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {publication.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              <FaFilePdf />
              View Paper
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={publication.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-all"
            >
              <FaBookOpen />
              DOI
              <FaExternalLinkAlt size={12} />
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResearchSection;