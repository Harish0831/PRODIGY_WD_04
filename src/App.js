import React from 'react';
import './App.css';

// Import sections
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


