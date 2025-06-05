import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaPowerOff, FaMicrosoft } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiFirebase } from "react-icons/si";

const Button = ({ children, className }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${className}`}
  >
    {children}
  </motion.button>
);

const projects = [
  {
    title: "DREAM: Learning Disability Detection App",
    description:
      "A mobile application to detect dyslexia, dysgraphia, and dyscalculia in children using ML & DL models. Built with Flutter, Firebase, Flask, and deployed via Hugging Face and Render.",
    stack: ["Flutter", "Firebase", "Python", "CNN", "Logistic Regression"],
    video: "/videos/demo-dream.mp4",
    github: "https://github.com/MinahilNaseer/DREAM"
  },
  {
    title: "Encryption Analyzer (WinForms)",
    description:
      "C# Windows app to compare RSA and AES encryption protocols with speed and accuracy benchmarks.",
    stack: ["C#", "WinForms", "DES", "AES"],
    image: "/images/AESDES.jpeg",
  },
  {
    title: "Retail Sales Dashboard",
    description:
      "A dynamic Power BI dashboard showcasing key retail metrics such as total revenue, total orders, top-selling products, customer insights, and revenue distribution across countries. Designed for business decision-making and performance monitoring.",
    stack: ["Power BI", "DAX", "Data Visualization"],
    image: "/images/dashboard-retail.png",
  },
   {
    title: "Task Management System",
    description:
      "A web-based task management app enabling users to create, update, and delete tasks with authentication and local storage.",
    stack: ["ReactJs", "Tailwindcss", "Postcss"],
    image: "/images/task-manage.jpeg",
    github: "https://github.com/MinahilNaseer/Task-Management"
  },
  {
    title: "Music Player App",
    description:
      "An interactive web-based music player with controls for play, pause, next, and previous, built using HTML5 Audio API.",
    stack: ["Reactjs","Tailwindcss","Postcss", "NodeJs", "Express","Machine Learning (Recommendation System)","Microsoft Azure","Music API"],
    image: "/images/dash.jpg",
    github: "https://github.com/MinahilNaseer/Music-Player"
  },
  {
    title: "Loan Prediction using Machine Learning",
    description:
      "A machine learning model that predicts loan approval status based on applicant attributes. Implemented with Python and scikit-learn.",
    stack: ["Python", "scikit-learn", "Pandas","Machine Learning"],
    image: "/images/loan-Pre.png",
    github: "https://github.com/MinahilNaseer/Loan-Prediciton-using-ML"
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather forecast web app that fetches real-time weather data using OpenWeatherMap API. Users can search and view current weather and forecasts.",
    stack: ["HTML", "CSS", "JavaScript", "Weather API","Node.js","Express.js"],
    image: "/images/weather.jpeg",
    github: "https://github.com/MinahilNaseer/WeatherDashboard"
  },
  {
    title: "Recipe App",
    description:
      "A simple and user-friendly recipe application that displays recipes with ingredients and instructions fetched via an external API.",
    stack: ["Flutter", "Firebase", "Android Studio"],
    image: "/images/food-dash.jpg",
    github: "https://github.com/MinahilNaseer/App-Recipe",
    isMobile: true

  }
];

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <FaMicrosoft /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Power BI", icon: <FaPowerOff /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> }
];


export default function PortfolioLanding() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section - Fullscreen */}
      <motion.div
        className="h-screen px-6 py-20 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm Minahil Nasser<br />
            <motion.span
              className="text-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Engineer & ML Developer
            </motion.span>
          </h1>
          <p className="text-lg text-gray-300">
            A passionate software engineer and ML enthusiast who builds intelligent and user-friendly web and mobile applications.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <Button className="bg-white text-black hover:bg-gray-200">Hire me</Button>
            <Button className="border border-white text-white hover:bg-white hover:text-black">See my work</Button>
          </div>
        </div>
      </motion.div>

      {/* Selected Work Section */}
      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
        <div className="flex flex-col gap-20">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
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
                  className="w-full md:w-1/2 h-auto rounded-md shadow-md"
                >
                  <source src={proj.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={`rounded-md shadow-md hover:scale-105 transition-transform ${proj.isMobile ? 'w-[220px] md:w-[220px] md:mr-0 mx-auto mb-4' : 'w-full md:w-1/2 md:mr-6'}`}
                />
              )}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-3xl font-bold mb-4 tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">
                  {proj.description}
                </p>
                <ul className="text-sm text-gray-400 list-disc ml-5 mb-4">
                  {proj.stack.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 font-semibold hover:underline"
                >
                  Explore this project <span className="ml-2">🐱</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-indigo-400 text-4xl hover:scale-110 transition-transform"
          >
            {tech.icon}
            <p className="text-white text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
    {/* Resume Download & Contact Section */}
      <section className="bg-black px-8 py-20 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Download Resume</h2>
          <a
            href="/resume/Minahil-Naseer.pdf"
            download
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600"
          >
            Download PDF
          </a>
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

      {/* Footer */}
      <footer className="bg-gray-950 text-center text-sm text-gray-500 py-6">
        <p>© {new Date().getFullYear()} Minahil Nasser. All rights reserved.</p>
      </footer>
    </div>
  );
}

