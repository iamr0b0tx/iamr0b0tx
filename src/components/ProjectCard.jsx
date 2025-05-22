import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

const ProjectCard = ({
  title,
  techStack,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      className="border border-green-200/30 rounded-xl p-6 shadow-sm hover:shadow-md bg-white/5 backdrop-blur-sm hover:border-green-200/50 transition-all duration-300 hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-green-100 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech}
            className=" w-18 h-6 rounded-sm"
            alt={tech}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-300 hover:text-green-100 transition-colors group"
            aria-label={`View ${title} on GitHub`}
          >
            <FaGithub className="group-hover:scale-110 transition-transform" />
            <span className="text-sm">Code</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-300 hover:text-green-100 transition-colors group"
            aria-label={`View live demo of ${title}`}
          >
            <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
            <span className="text-sm">Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
