import React from "react";
import { motion } from "motion/react";
import skills from "../data/skills.json";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="p-6 min-h-[100vh] mb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white">About</h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 my-20 xl:text-lg"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.img
          src="/abdulfatah.jpg"
          alt="Abdulfatah_profile"
          className="w-80 h-60 rounded-md object-cover"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div variants={fadeInUp}>
          <h3>
            Hi, my name is Abdulfatah Adeneye.
            <br />A software developer based in Lagos, Nigeria. I am specialised
            in <span className="text-green-400">backend</span> and{" "}
            <span className="text-green-400">DevOps</span>. I have extensive
            experience working with{" "}
            <span className="text-green-400">Python </span>
            for backend development using{" "}
            <span className="text-green-400">Django</span>.
            <br />I also have some experience using{" "}
            <span className="text-green-400">
              Python for machine learning
            </span>{" "}
            with <span className="text-green-400">NumPy</span>,{" "}
            <span className="text-green-400">pandas</span>,{" "}
            <span className="text-green-400">sklearn</span> and{" "}
            <span className="text-green-400">Keras</span>.
          </h3>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h3>
            I love{" "}
            <span className="text-green-400">solving customer problems</span>{" "}
            with technology, always minimizing cost and maximizing value. I have
            experience working with and managing other engineers. I am good at
            understanding requirements, documenting them, and{" "}
            <span className="text-green-400">communicating</span> with
            stakeholders about issues, solutions and progress. I am able to
            document plans,{" "}
            <span className="text-green-400">design high-level</span> solutions
            and implement low-level tasks.
          </h3>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl mb-8">Skills</h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory, index) => (
            <div key={index} variants={fadeInUp} className=" p-4 rounded-lg ">
              <h4 className="text-lg mb-4 font-medium">
                {skillCategory.category}
              </h4>
              <div className="space-y-3">
                {skillCategory.items.map((skill, i) => (
                  <div key={i}>
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-18 h-6 rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
