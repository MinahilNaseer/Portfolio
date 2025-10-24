import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = React.forwardRef(({ activeTab = 'development' }, ref) => (
  <section className="bg-black px-8 py-20 text-center" ref={ref}>
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-8">Download Resume</h2>
      
      {/* Primary Resume based on active tab */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-300">
          {activeTab === 'development' ? 'Software Development Resume' : 'Data Analytics Resume'}
        </h3>
        <motion.a
          href={activeTab === 'development' ? "/resume/development-resume.pdf" : "/resume/Resume-Data-Analyst.pdf"}
          download={activeTab === 'development' ? "Minahil_Naseer_Development_Resume.pdf" : "Minahil_Naseer_Analytics_Resume.pdf"}
          className="inline-block bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition-colors text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeTab === 'development' ? 'Download Development Resume' : 'Download Analytics Resume'}
        </motion.a>
      </div>

      {/* Alternative Resume */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-400">
          Also available
        </h3>
        <motion.a
          href={activeTab === 'development' ? "/resume/Resume-Data-Analyst.pdf" : "/resume/development-resume.pdf"}
          download={activeTab === 'development' ? "Minahil_Naseer_Analytics_Resume.pdf" : "Minahil_Naseer_Development_Resume.pdf"}
          className="inline-block border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {activeTab === 'development' ? 'Download Analytics Resume' : 'Download Development Resume'}
        </motion.a>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-12">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        {activeTab === 'development' 
          ? "Interested in collaborating on a development project? Let's connect!" 
          : "Need data analysis or business intelligence solutions? Get in touch!"
        }
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="mailto:minahilnasser154@gmail.com" className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors">
          minahilnasser154@gmail.com
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a
          href="https://www.linkedin.com/in/minahil-naseer-ab0899241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  </section>
));

export default ResumeSection;