import './Home.css';
import { FaChevronDown } from 'react-icons/fa';

function Home() {
  return (
    <div className="Home">
      <section className="Home-header">
        <div className="welcome-container">
            <p className="title"><b>Hi, I'm Paulo ;)</b></p>
            <p className="sub-title">I develop user interfaces for web. Optimization is my passion!</p>
        </div>
        <div className="division" />
        <div className="call-to-action">
          <FaChevronDown className="icon" />
          <p>Navigate and know more about my work</p>
          <FaChevronDown className="icon" />
        </div>
        <div className="buttons-navigation">
          <a target="_blank" href="https://github.com/pa-volpin"
            rel="noopener noreferrer">GitHub</a>
          <a target="_blank" href="https://www.linkedin.com/in/pavolpin/"
            rel="noopener noreferrer">Linkedin</a>
          <a href="#about" rel="noopener noreferrer">About</a>
          <a href="#techs" rel="noopener noreferrer">Techs</a>
          <a href="#projects" rel="noopener noreferrer">Projects</a>
          <a href="#contacts" rel="noopener noreferrer">Contacts</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
