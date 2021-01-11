import React, { useState } from 'react';
import './About.css';

function About() {
  const [readMore, setReadMore] = useState('');
  return (
    <div className="about-section">
      <section className="about-content">
        <div className="image-container">
          <div className="image-box" />
        </div>
        <div className={ `about-text ${readMore}`} >
          <p className="title">About Me</p>
          <div className="division" />
          <p className="description">
            I'm a front-end developer passionate for technologies, entrepreneurship and optimizations.<br></br><br></br>
            <span className="secondary-part">I carry with me a strong analitycal background in addition some experiences in sales area.<br></br><br></br>
            Currently I'm a journey to become a full-stack developer through the formation of <a href="https://www.betrybe.com/" className="trybe-link">Trybe</a>.</span>
          </p>
          <button
            className="primary-button"
            onClick={ () => setReadMore(
              (prevState) => prevState === '' ? 'expanded' : '') }
          >
            { readMore === '' ? 'Read More' : 'Back'}
          </button>
        </div>
      </section>
    </div>
  );
  
}

export default About;