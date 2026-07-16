import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResumeSection = React.forwardRef((props, ref) => {
  const [fileExists, setFileExists] = useState(true);

  const resume = {
    path: "/resume/Resume.pdf", // Change this to your resume filename
    downloadName: "Minahil_Naseer_Resume.pdf",
    displayName: "Resume",
  };

  useEffect(() => {
    const checkFile = async () => {
      try {
        const response = await fetch(resume.path);
        setFileExists(response.ok);
      } catch {
        setFileExists(false);
      }
    };

    checkFile();
  }, []);

  return (
    <section className="bg-black px-8 py-20 text-center" ref={ref}>
      <h2 className="text-4xl font-bold mb-6">Resume</h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Download my latest resume to learn more about my experience in Software
        Engineering, Artificial Intelligence, Machine Learning, and Data
        Analytics.
      </p>

      {fileExists ? (
        <motion.a
          href={resume.path}
          download={resume.downloadName}
          className="inline-block bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition-colors text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      ) : (
        <p className="text-red-400">Resume file not found.</p>
      )}

      {/* Contact */}
      <div className="border-t border-gray-800 pt-12 mt-16">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-300 mb-6">
          Interested in collaborating or discussing opportunities? I'd love to
          hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:minahilnasser154@gmail.com"
            className="text-indigo-400 hover:text-indigo-300 hover:underline"
          >
            minahilnasser154@gmail.com
          </a>

          <span className="hidden sm:inline text-gray-500">|</span>

          <a
            href="https://www.linkedin.com/in/minahil-naseer-ab0899241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
});

export default ResumeSection;