import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './styles/productBox.css';

const ProductBox = ({ title }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={`scroll-container-wrapper ${title ? 'with-title' : ''}`}>
      {title && <h2 className='scroll-title'>{title}</h2>}
      <button className='scroll-button left' onClick={() => scroll('left')}>
        <FontAwesomeIcon className='scroll-button-icon' icon={faChevronLeft} />
      </button>
      <div className='scroll-container' ref={scrollContainerRef}>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 1</div>
            <div className='product-price'>$99.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 2</div>
            <div className='product-price'>$149.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 3</div>
            <div className='product-price'>$199.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 4</div>
            <div className='product-price'>$79.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 5</div>
            <div className='product-price'>$69.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 6</div>
            <div className='product-price'>$29.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 7</div>
            <div className='product-price'>$49.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 8</div>
            <div className='product-price'>$97.99</div>
          </div>
        </div>
        <div className='scroll-item'>
          <div className='image-box'></div>
          <div className='info-box'>
            <div className='product-name'>Product 9</div>
            <div className='product-price'>$89.99</div>
          </div>
        </div>
      </div>
      <button className='scroll-button right' onClick={() => scroll('right')}>
        <FontAwesomeIcon className='scroll-button-icon' icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ProductBox;
