import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './styles/productBox.css';

const ProductBox = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='scroll-container-wrapper'>
      <button className='scroll-button left' onClick={() => scroll('left')}>
        <FontAwesomeIcon className='scroll-button-icon' icon={faChevronLeft} />
      </button>
      <div className='scroll-container' ref={scrollContainerRef}>
        <div className='scroll-item'>1</div>
        <div className='scroll-item'>2</div>
        <div className='scroll-item'>3</div>
        <div className='scroll-item'>4</div>
        <div className='scroll-item'>5</div>
        <div className='scroll-item'>6</div>
      </div>
      <button className='scroll-button right' onClick={() => scroll('right')}>
        <FontAwesomeIcon className='scroll-button-icon' icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ProductBox;
