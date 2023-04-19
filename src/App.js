import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import ProjectIdea from './components/ProjectIdea';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className='firstbackground'>
        <Home />
        <About />
      </div>
      <TechnicalSkills />
      <Projects />
      <ProjectIdea />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
