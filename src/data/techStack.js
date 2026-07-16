import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaMicrosoft,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiOracle,
  SiMysql,
} from "react-icons/si";

export const techStack = [
  // ==========================
  // Frontend
  // ==========================
  { category: "Frontend" },

  { name: "React", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // ==========================
  // Backend & Cloud
  // ==========================
  { category: "Backend & Cloud" },

  { name: "Node.js", icon: FaNodeJs },
  { name: "Firebase", icon: SiFirebase },

  // ==========================
  // Programming Languages
  // ==========================
  { category: "Programming Languages" },

  { name: "Python", icon: FaPython },
  { name: "C#", icon: FaMicrosoft },

  // ==========================
  // Databases
  // ==========================
  { category: "Databases" },

  { name: "Oracle SQL Developer", icon: SiOracle },
  { name: "SQL", icon: FaDatabase },
  { name: "MySQL", icon: SiMysql },

  // ==========================
  // Version Control
  // ==========================
  { category: "Version Control" },

  { name: "Git", icon: FaGitAlt },
];

export default techStack;