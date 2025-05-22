import React from "react";
import { motion } from "motion/react";
import experience from "../data/experience.json";

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    hover: { scale: 1.2, backgroundColor: "#4ade80" },
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-green-400 to-emerald-600 transform md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="relative mb-12 pl-10 md:pl-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-0 md:left-1/2 w-6 h-6 bg-green-400 rounded-full z-10 transform  translate-x-1 md:-translate-x-3 ${
                  index % 2 === 0 ? "md:-translate-x-1" : "md:-translate-x-1"
                }`}
                variants={dotVariants}
                whileHover="hover"
              />

              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-400 transition-all duration-300 ${
                      index % 2 === 0
                        ? "md:border-l-4 md:border-l-green-400"
                        : "md:border-r-4 md:border-r-green-400"
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between max-sm:flex-col items-start mb-2">
                      <motion.h2 className="text-xl font-bold text-green-300">
                        {job.company}
                      </motion.h2>
                      <motion.span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {job.date}
                      </motion.span>
                    </div>
                    <motion.p className="text-sm text-gray-300 mb-2">
                      {job.location}
                    </motion.p>
                    <motion.h3 className="text-lg font-semibold text-green-200 mb-3">
                      {job.role}
                    </motion.h3>
                    <motion.p className="text-gray-300 text-sm leading-relaxed">
                      {job.description}
                    </motion.p>

                    {job.technologies && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="text-xs px-2 py-1 bg-gray-700/50 text-green-200 rounded"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
