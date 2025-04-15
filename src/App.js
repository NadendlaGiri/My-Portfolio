import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* Sections on the same page */}
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Blog />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
