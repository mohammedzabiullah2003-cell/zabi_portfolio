import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}

export default App;
