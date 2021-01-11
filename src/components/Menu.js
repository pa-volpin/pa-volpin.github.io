import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo-volpin.png';
import './Menu.css';

function Menu(props) {
  const [status, setStatus] = useState('closed');
  const [selected, setSelected] = useState('');
  const [progress, setProgress] = useState(0);

  const handleClick = ({ target }) => {
    const { checked } = target;
    const status = (checked) ? 'open' : 'closed';
    setStatus(status);
  }

  useEffect(() => {
    function calculateHeight() {
      const mainElement = document.querySelector('.app-container');
      const numberOfBlocks = mainElement.children.length - 2;
      const scrollTop = mainElement.scrollTop;
      setProgress(scrollTop/(numberOfBlocks * window.innerHeight) * 100);
      setSelected(scrollTop/window.innerHeight)
      console.log(scrollTop/window.innerHeight)
    }

    document.querySelector('.app-container').addEventListener('scroll', () => calculateHeight());

    calculateHeight();

    return () => document.querySelector('.app-container').removeEventListener('scroll', () => calculateHeight());
  }, []);

  const actualProgress =`linear-gradient(to right,
    #61dafb ${progress}% ,white ${progress}%)`;

  const links = [
    { content: 'Home', path: 'home' },
    { content: 'About', path: 'about' },
    { content: 'Techs', path: 'techs' },
    { content: 'Projects', path: 'projects' },
  ];

  return (
    <header className="menu-container">
      <div role="navigation" className={ `menu ${status}` }>
        <div className="logo-area">
          <img src={ logo } alt="trivia logo" />
        </div>
        <input type="checkbox" id="toggle" onClick={ handleClick } />
        <label htmlFor="toggle" className="menu-toggle">
          { status === 'closed'
            ? <FaBars className="menu-icon" /> : <FaTimes className="menu-icon" /> }
        </label>
        {/* Conteúdo do Menu que desce em dropdown */}
        <nav className="menu-content">
          { links.map((link, index) => {
            const linkClass = (index === selected)
              ? 'link selected' : 'link';
            return (
              <a
                href={ `#${link.path}` }
                onClick={ () => setStatus('closed') }
                key={ index }
                type="button"
                className={ linkClass }
                name={ link.path }
              >
                { link.content }
              </a>
            );
          })}
        </nav>
      </div>
      <div
        className="progressbar"
        style={{ backgroundImage: actualProgress }}
      >
        {/* <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="menu-toggle">
          { status === 'closed'
            ? <FaBars className="menu-icon" /> : <FaTimes className="menu-icon" /> }
        </label> */}
        <p className="call-menu">Menu</p>
      </div>
    
    </header>
  );
}

// export default withRouter(Menu);
export default Menu;

Menu.propTypes = {
  match: PropTypes.shape.isRequired,
  path: PropTypes.string.isRequired,
  history: PropTypes.shape.isRequired,
};
