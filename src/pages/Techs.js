import React from 'react';
import './Techs.css';
import JS from '../images/javascript.svg';
import CSS from '../images/css.svg';
import HTML from '../images/html.svg';
import REACT from '../images/react.svg';
import REDUX from '../images/redux.png';
import JEST from '../images/jest.png';
import RTL from '../images/rtl.png';
import GITHUB from '../images/github.svg';
import GIT from '../images/git.png';
import SQL from '../images/sql.svg';
import MYSQL from '../images/mysql.svg';
import VBA from '../images/vba.svg';
import { CarouselX } from '../components';

function Techs() {
  return (
    <section className="techs-section">
      <p className="title">Technologies</p>
      <CarouselX qtyPerPage={6} id="carousel-techs">
        <div className="tag">
          <img src={ JS } />
          <p className="tech-name">Javascript</p>
        </div>
        <div className="tag">
          <img src={ CSS } />
          <p className="tech-name">CSS</p>
        </div>
        <div className="tag">
          <img src={ HTML } />
          <p className="tech-name">HTML</p>
        </div>
        <div className="tag">
          <img src={ REACT } />
          <p className="tech-name">React</p>
        </div>
        <div className="tag">
          <img src={ REDUX } />
          <p className="tech-name">Redux</p>
        </div>
        <div className="tag">
          <img src={ RTL } />
          <p className="tech-name">RTL</p>
        </div>
        <div className="tag">
          <img src={ JEST } />
          <p className="tech-name">Jest</p>
        </div>
        <div className="tag">
          <img src={ GIT } />
          <p className="tech-name">Git</p>
        </div>
        <div className="tag">
          <img src={ GITHUB } />
          <p className="tech-name">GitHub</p>
        </div>
        <div className="tag">
          <img src={ SQL } />
          <p className="tech-name">SQL</p>
        </div>
        <div className="tag">
          <img src={ MYSQL } />
          <p className="tech-name">MySQL</p>
        </div>
        <div className="tag">
          <img src={ VBA } />
          <p className="tech-name">VBA</p>
        </div>
      </CarouselX>
    </section>
  );
}

export default Techs;