import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaPowerOff, FaMicrosoft } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiFirebase } from "react-icons/si";
import { db } from '../src/firebase/config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getProjects } from "./services/projects";
import emailjs from '@emailjs/browser';



const Button = ({ children, className, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${className}`}
  >
    {children}
  </motion.button>
);

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


const PortfolioLanding = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contactRef = useRef(null);
  const workRef = useRef(null);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: 'smooth' });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: new Date(),
      });
      try {
        await addDoc(collection(db, "messages"), {
          ...formData,
          timestamp: new Date(),
        });

        await emailjs.send(
          "service_2ewf699",           // Replace with your real ID
          "template_jnkopz9",          // Replace with your real template
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: "New Portfolio Message"
          },
          "amLjy0aJPn-6EyT4h"          // Your public key
        );



        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

      } catch (error) {
        console.error("EmailJS or Firestore error:", error);
        setFormStatus("Failed to send message.");
      }


      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Firestore error:", error);
      setFormStatus("Failed to send message.");
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            Hi, I'm Minahil Naseer<br />
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
            <Button className="bg-white text-black hover:bg-gray-200" onClick={scrollToContact}>Hire me</Button>
            <Button className="border border-white text-white hover:bg-white hover:text-black" onClick={scrollToWork}>See my work</Button>
          </div>
        </div>
      </motion.div>
      {/* About Me Section */}
      <section className="bg-gray-900 text-white px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            A passionate Software Engineering student with hands-on experience in building web and mobile applications using ReactJS and Flutter.
            Proficient in integrating machine learning models for real-world problems, particularly in educational and healthcare domains.
            Seeking roles that blend front-end development with AI/ML to deliver impactful, user-centered solutions.
          </p>
        </div>
      </section>



      {/* Selected Work Section */}
      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Projects Worked On</h2>
        <div className="flex flex-col gap-20" ref={workRef}>
          {loading && <p className="text-center text-gray-400">Loading projects...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}

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
                    className="inline-flex items-center text-indigo-400 font-semibold hover:underline"
                  >
                    Explore this project <span className="ml-2"></span>
                  </a>
                )}

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
      <section className="bg-black px-8 py-20 text-center" >
        <div className="mb-12" ref={contactRef}>
          <h2 className="text-4xl font-bold mb-4">Download Resume</h2>
          <a
            href="/resume/Resume.pdf"
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

      {/* Contact Form Section */}
      <section className="bg-gray-900 px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Send Message</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-[#0a0a0a] rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6 border-r border-gray-800 space-y-6">
            <span className="inline-block text-xs font-semibold text-red-500 bg-red-950 rounded-full px-3 py-1 border border-red-500 mb-2">
              ● Available for hire
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              As a software engineer, I construct web interfaces and design systems with a special love for accessibility and performance. I tend to code things from scratch and enjoy bringing ideas to life.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              I'm also an open-source developer, and in my spare time, I do digital art with my iPad Pro.
            </p>
            <img src="/images/signature.png" alt="signature" className="w-40 pt-4" />
          </div>

          <form className="w-full md:w-1/2 p-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
              <input type="text" id="name" name="name" value={formData.name} className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input type="email" id="email" name="email" value={formData.email} className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">How can I help you?</label>
              <textarea id="message" name="message" value={formData.message} rows="4" className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "Sending..."}
              className={`mt-4 font-semibold py-2 px-6 rounded transition ${formStatus === "Sending..." ? "bg-gray-400 text-black cursor-not-allowed" : "bg-white text-black hover:bg-gray-300"
                }`}
            >
              {formStatus === "Sending..." ? "Sending..." : "Send"}
            </button>

            {formStatus && <p className="text-sm text-center text-green-400">{formStatus}</p>}
          </form>


        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-950 text-center text-sm text-gray-500 py-6">
        <p>© {new Date().getFullYear()} Minahil Nasser. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PortfolioLanding;