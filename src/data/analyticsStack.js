import {
  FaPython,
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaRobot,
  FaEye,
} from "react-icons/fa";

import {
  SiTableau,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiJupyter,
  SiHuggingface,
  SiGooglecolab,
} from "react-icons/si";

export const analyticsStack = [
  // ===========================
  // Programming & Databases
  // ===========================
  { category: "Programming & Databases" },

  { name: "Python", icon: FaPython },
  { name: "SQL", icon: FaDatabase },

  // ===========================
  // Data Analytics & BI
  // ===========================
  { category: "Data Analytics & BI" },

  { name: "Power BI", icon: FaChartBar },
  { name: "Tableau", icon: SiTableau },
  { name: "Pandas", icon: SiPandas },
  { name: "Data Visualization", icon: FaChartLine },
  { name: "Statistical Analysis", icon: FaChartBar },

  // ===========================
  // Machine Learning
  // ===========================
  { category: "Machine Learning" },

  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },

  // ===========================
  // NLP & Generative AI
  // ===========================
  { category: "NLP & Generative AI" },

  { name: "Transformers", icon: SiHuggingface },
  { name: "Hugging Face", icon: SiHuggingface },

  // ===========================
  // Computer Vision
  // ===========================
  { category: "Computer Vision" },

  { name: "YOLO", icon: FaRobot },
  { name: "Computer Vision", icon: FaEye },
  { name: "OpenCV", icon: SiOpencv },

  // ===========================
  // Development Environment
  // ===========================
  { category: "Development Environment" },

  { name: "Google Colab", icon: SiGooglecolab },
  { name: "Jupyter Notebook", icon: SiJupyter },
];

export default analyticsStack;