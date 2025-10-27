import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-white text-2xl font-bold cursor-pointer">
          Zabi
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
            Skills
          </Link>
          <Link to="articles" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
            Articles
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;