import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

const TechStackSection = () => (
  <section className="bg-gray-900 text-white px-8 py-20">
    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
        Software Development Tech Stack
      </h2>

      {techStack.map((item, index) => {

        // Render Category Heading
        if (item.category) {
          return (
            <div key={index} className="mt-12 first:mt-0">
              <h3 className="text-2xl font-semibold text-cyan-400 border-b border-gray-700 pb-2 mb-8">
                {item.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {techStack
                  .slice(index + 1)
                  .filter(t => !t.category)
                  .slice(
                    0,
                    techStack
                      .slice(index + 1)
                      .findIndex(t => t.category) === -1
                      ? techStack.length
                      : techStack
                          .slice(index + 1)
                          .findIndex(t => t.category)
                  )
                  .map((tech, i) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        key={i}
                        className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                      >
                        <Icon className="text-5xl text-indigo-400 mb-4" />

                        <p className="text-white text-sm text-center font-medium">
                          {tech.name}
                        </p>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  </section>
);

export default TechStackSection;