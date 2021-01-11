import React from 'react';
import { Home, About, Projects, Techs } from './pages';
import './App.css';
import { Menu } from './components';

function App() {
  return (
    <div className="app-container">
      <Menu />
      <div name="home" className="app-section" id="home">
        <Home />
      </div>
      <div name="about" className="app-section" id="about">
        <About />
      </div>
      <div name="techs" className="app-section" id="techs">
        <Techs />
      </div>
      <div name="projects" className="app-section" id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;