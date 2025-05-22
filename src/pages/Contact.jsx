import React from "react";
import { motion } from "motion/react";
import { FaCalendarAlt, FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="p-6 min-h-screen max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full" />
      </motion.div>

      <section className="my-10 md:my-14">
        <div className="grid xl:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-green-500 to-emerald-300 bg-clip-text text-transparent">
              Let's connect and discuss anything
            </h4>

            <div className="space-y-6">
              {/* Schedule Meeting Card */}
              <motion.a
                href="https://calendar.app.google/SvQDfwYsQNUT2RRL8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="
                  flex items-center gap-4
                  px-6 py-4
                  bg-gradient-to-br from-green-900/30 to-emerald-900/20
                  border border-green-800/50 hover:border-green-700/70
                  rounded-xl
                  text-green-100 hover:text-white
                  transition-all duration-300
                  group
                  cursor-pointer
                "
              >
                <div className="p-3 bg-green-800/50 rounded-lg group-hover:bg-green-700/50 transition-colors">
                  <FaCalendarAlt className="text-xl text-green-300" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold">Schedule a call</h5>
                  <p className="text-sm text-gray-400 mt-1">
                    30-minute video consultation
                  </p>
                </div>
                <FaExternalLinkAlt className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
            action="https://formsubmit.co/your@email.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New contact form submission"
            />

            <div className="flex flex-col group">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="
                  bg-gray-900/20
                  border-b-2 border-gray-600 
                  py-3 px-1 
                  outline-none 
                  transition-all 
                  focus:border-green-500 
                  focus:shadow-[0_5px_5px_-5px_rgba(16,185,129,0.3)]
                  text-white
                "
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col group">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="
                  bg-gray-900/20
                  border-b-2 border-gray-600 
                  py-3 px-1 
                  outline-none 
                  transition-all 
                  focus:border-green-500 
                  focus:shadow-[0_5px_5px_-5px_rgba(16,185,129,0.3)]
                  text-white
                "
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="flex flex-col group">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="
                  bg-gray-900/20
                  border-2 border-gray-600 
                  rounded-lg 
                  py-3 px-2
                  outline-none 
                  transition-all 
                  focus:border-green-500 
                  focus:ring-1 focus:ring-green-500 
                  resize-none
                  text-white
                "
                placeholder="Tell me what you need..."
              />
            </div>

            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="
                  flex items-center gap-2
                  bg-gradient-to-r from-green-500 to-emerald-600 
                  text-white 
                  px-8 py-3 
                  rounded-lg 
                  font-medium 
                  hover:shadow-lg hover:shadow-green-500/20 
                  transition-all duration-300
                "
              >
                <FaPaperPlane />
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
