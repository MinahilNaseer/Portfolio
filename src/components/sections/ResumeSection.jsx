import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = React.forwardRef((props, ref) => (
  <section className="bg-black px-8 py-20 text-center" ref={ref}>
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-4">Download Resume</h2>
      <motion.a
        href="/resume/Resume.pdf"
        download
        className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download PDF
      </motion.a>
    </div>
    <div>
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">I'd love to connect! Reach out via email or LinkedIn.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="mailto:minahilnasser154@gmail.com" className="text-indigo-400 hover:underline">minahilnasser154@gmail.com</a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://www.linkedin.com/in/minahil-naseer-ab0899241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  </section>
));

export default ResumeSection;