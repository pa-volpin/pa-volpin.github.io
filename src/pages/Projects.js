import React from 'react';
import './Projects.css';
import CarouselX from '../components/CarouselX';

function Projects() {
  return (
    <section className="projects-section">
      <p className="title">Projects</p>
      <CarouselX qtyPerPage={3} id="carousel-projects">
        <div className="project-card trivia">
          <div className="half-mask" />
          <div className="mask" />
          <p className="project-name">Trivia App</p>
          <p className="description">Gameplay about answers and questions</p>
          <a
            href="https://pa-volpin.github.io/app-trivia/"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigate
          </a>
          <a
            href="https://github.com/pa-volpin/app-trivia"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about
          </a>
        </div>
        <div className="project-card recipes">
          <div className="half-mask" />
          <div className="mask" />
          <p className="project-name">Recipes App</p>
          <p className="description">Search and enjoy recipes as you desire</p>
          <a
            href="https://pa-volpin.github.io/app-receitas/"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigate
          </a>
          <a
            href="https://github.com/pa-volpin/app-receitas"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about
          </a>
        </div>
        <div className="project-card pokedex">
          <div className="half-mask" />
          <div className="mask" />
          <p className="project-name">Pokedex</p>
          <p className="description">Select your favorite pokemons</p>
          <a
            href="https://pa-volpin.github.io/app-pokedex/"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigate
          </a>
          <a
            href="https://github.com/pa-volpin/app-pokedex"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about
          </a>
        </div>
      </CarouselX>
    </section>
  );
  
}

export default Projects;