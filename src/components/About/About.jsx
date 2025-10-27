import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="text-white flex items-center justify-center py-16">
      <div className="container mx-auto p-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <div className="w-64 h-64 bg-gray-700 rounded-full mx-auto"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <p className="text-lg">
              I am a passionate and creative full-stack developer with a knack for building beautiful and functional web applications. I have experience with a variety of technologies, including React, Node.js, and Three.js. I am always looking for new challenges and opportunities to learn and grow.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;