import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'Three.js', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 80 },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                <span className="text-2xl font-bold">{skill.level}%</span>
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;