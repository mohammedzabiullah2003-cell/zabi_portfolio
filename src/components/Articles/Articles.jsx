import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Getting Started with React Three Fiber',
    description: 'A beginner-friendly guide to creating 3D graphics in React.',
    link: '#',
  },
  {
    title: 'Advanced Animations with Framer Motion',
    description: 'Take your web animations to the next level with these advanced techniques.',
    link: '#',
  },
  {
    title: 'Building a Portfolio with Vite and Tailwind CSS',
    description: 'Learn how to build a modern, fast, and beautiful portfolio website.',
    link: '#',
  },
];

const Articles = () => {
  return (
    <div id="articles" className="text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-400 mb-4">{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;