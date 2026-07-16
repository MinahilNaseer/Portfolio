import React from "react";
import { motion } from "framer-motion";
import { analyticsStack } from "../../data/analyticsStack";

const AnalyticsStackSection = () => (
  <section className="bg-gray-900 text-white px-8 py-20">
    <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
      Data Analytics, AI & Machine Learning
    </h2>

    <div className="max-w-6xl mx-auto">
      {analyticsStack.map((item, index) => {
        if (item.category) {
          return (
            <h3
              key={index}
              className="text-2xl font-semibold text-cyan-400 mt-12 mb-6 border-b border-gray-700 pb-2"
            >
              {item.category}
            </h3>
          );
        }

        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className="inline-flex flex-col items-center justify-center w-40 h-32 m-3 rounded-xl bg-gray-800 hover:bg-gray-700"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Icon className="text-4xl text-purple-400 mb-3" />
            <p className="text-sm text-center">{item.name}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default AnalyticsStackSection;