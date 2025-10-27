import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <div className="max-w-lg mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg mb-4">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            <motion.a whileHover={{ y: -5, scale: 1.2 }} href="#" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a whileHover={{ y: -5, scale: 1.2 }} href="#" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a whileHover={{ y: -5, scale: 1.2 }} href="#" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a whileHover={{ y: -5, scale: 1.2 }} href="#" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;