import React from "react";
import Timeline from "../components/Timeline";
import { motion } from "motion/react";

function Work() {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="p-6 my-8 xl:my-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold  text-white">Work</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full" />
      </motion.div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <Timeline />
      </motion.section>
    </div>
  );
}

export default Work;
