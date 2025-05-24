import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects.json";
// ProjectCard
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="p-6  mb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          My Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full mt-4" />
      </motion.div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};
export default Projects;
