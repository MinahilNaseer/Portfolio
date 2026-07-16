import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

const Hero = ({ scrollToWork, scrollToContact }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 flex items-center justify-center overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 left-0" />
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0" />

      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold text-white"
        >
          Minahil Naseer
        </motion.h1>

        {/* Subtitle */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-6 text-2xl md:text-3xl text-cyan-400 font-semibold"
        >
          Software Engineer • AI/ML Engineer • Data Analyst
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto"
        >
          Passionate Software Engineer experienced in Full-Stack Development,
          Flutter, React, Artificial Intelligence, Machine Learning and Data
          Analytics. I build scalable applications and intelligent systems that
          transform ideas into impactful digital solutions.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button
            onClick={scrollToWork}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition"
          >
            View Projects
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-xl font-semibold transition"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-12 flex justify-center gap-8 text-3xl"
        >
          <a
            href="https://github.com/MinahilNaseer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/minahil-naseer-ab0899241/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={scrollToContact}
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </button>
        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 text-3xl text-white"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
};

export default Hero;