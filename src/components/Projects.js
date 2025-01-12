import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1: Navigation menu</h3>
          <p>A simple resonsive landing page.</p>
          <a href="https://github.com/Harish0831/PRODIGY_WD_01" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="project">
          <h3>Project 2: Stopwatch</h3>
          <p>simple stopwatch to measure time interval precisely.</p>
          <a href="https://github.com/Harish0831/PRODIGY_WD_02" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="project">
          <h3>Project 3: tic tac toe</h3>
          <p>Simple game for relaxing.</p>
          <a href="https://github.com/Harish0831/PRODIGY_WD_03" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="project">
          <h3>Project 2: My portfolio</h3>
          <p>To introdue everyone about my career education and my intersts .</p>
          <a href="https://github.com/Harish0831/PRODIGY_WD_04" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
