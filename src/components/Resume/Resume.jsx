import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div id="resume" className="text-white flex items-center justify-center py-16">
      <div className="container mx-auto p-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          Resume
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Download Resume
        </motion.button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p>Univeristy of Swabi, Swabi</p>
            <p>BS in Computer Science</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <p>Full Stack Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Achievements</h3>
            <p>Developed a lot of projects</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;