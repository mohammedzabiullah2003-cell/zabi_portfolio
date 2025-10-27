import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="hero" className="h-screen flex items-center justify-center bg-primary text-text-primary">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Zabi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          A passionate Full Stack Developer
        </motion.p>
        <div className="space-x-4">
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-highlight hover:bg-accent text-text-primary font-bold py-2 px-4 rounded"
            >
              View Projects
            </motion.button>
          </Link>
          <a href="/path-to-your-resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary hover:bg-accent text-text-primary font-bold py-2 px-4 rounded"
            >
              Download Resume
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;