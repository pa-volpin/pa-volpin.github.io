import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CarouselX.css';

function CarouselX(props) {
  const { id: uniqueID } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [qtyPerPage, setQtyPerPage] = useState(props.qtyPerPage);

  useEffect(() => {
    function handleQtyPerPageAccordingWindowSize() {
      if (window.innerWidth <= 992) setQtyPerPage(1);
      if (window.innerWidth > 992) setQtyPerPage(props.qtyPerPage);
    };

    window.addEventListener('resize', () => handleQtyPerPageAccordingWindowSize());

    handleQtyPerPageAccordingWindowSize();

    return () => window.removeEventListener('resize', () => handleQtyPerPageAccordingWindowSize());
  }, []);



  // Função de movimentação
  function scrollCarousel({ target }) {  
    const { value, name, id } = target;
    let normalization;
    if (name === `scroll-bar-${uniqueID}` ) {
      normalization = value/7.5;
    } else {
      normalization = parseInt(id.split('nav')[1]);
    }
    const screenWidth = document
      .querySelector('.app-container').clientWidth;
    const distance = normalization * screenWidth;
    const slides = document.querySelectorAll(`.${uniqueID}`);
    for (let i=0; i < slides.length; i += 1) {
      slides[i].style.transform = `translateX(-${distance}px)`;
    }
    setScrollPosition(normalization * 7.5);
    setActiveSlide(normalization);
  }

  // Montagem elementos
  const cards = props.children;
  const qtyOfItems = cards.length;
  const qtyOfSlides = qtyOfItems / qtyPerPage;
  const cardWidth = `${100 / qtyPerPage}%`;
  const slidesConfig = `repeat(${qtyOfSlides}, 100%)`;
  let slidesNavigators = [];
  let slides = [];
  for (let i=0; i < qtyOfSlides; i += 1) {
    slidesNavigators[i] =
      <div
        className={ i === activeSlide ? 'active' : '' }
        key={ `nav${i}${uniqueID}` }
        id={ `nav${i}` }
        name="index-navigator"
        onClick={ (e) => scrollCarousel(e) }
      />;
    slides[i] = [];
    for(let j=0; j < qtyPerPage; j += 1) {
      slides[i].push(
        <div
          className="card"
          id={ `card${j}${uniqueID}` }
          key={ `card${j}${uniqueID}` }
          style={{ width: cardWidth }}
        >
          { cards[i*qtyPerPage + j] }
        </div>
        );
    }
  }

  return (
    <div  className="carousel">
      <div
        className="carousel-slides"
        style={{ gridTemplateColumns: slidesConfig }}
      >
      { slides.map((slide, index) =>
          <div
            key={ `slide-${index}-${uniqueID}` }
            id={ `slide${index}` }
            className={ `slide ${uniqueID}` }
          >
            { slide }
          </div>
        ) }
      </div>
      { qtyOfSlides !== 1 &&
        ( 
        <div className="carousel-navigators-container">
          <div className="carousel-navigators">
            <div className="circles-navigator">
              { slidesNavigators }
            </div>
            <input
              name={ `scroll-bar-${uniqueID}` }
              type="range"
              min="0"
              max={ 7.5 * (qtyOfSlides - 1)}
              step={ 7.5 }
              value={ scrollPosition }
              className={ `scroll-navigator ${uniqueID}` }
              onChange={ (e) => scrollCarousel(e) }
            />
          </div>
        </div>
        )}
    </div>
  );  
}

export default CarouselX;

CarouselX.defaultProps = {
  qtyPerPage: 3,
}

CarouselX.propTypes = {
  qtyPerPage: PropTypes.number,
  id: PropTypes.string.isRequired,
}
