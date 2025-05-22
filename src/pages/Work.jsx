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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Timeline />
      </motion.section>
    </motion.div>
  );
}

export default Work;
