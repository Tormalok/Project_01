import React from 'react';
import './styles/CategoriesBox.css';

const CategoriesBox = () => {
  return (
    <div className='section-two'>
      <div className='box'>
        <div className='box-inner-top'></div>
        <div className='box-inner-bottom'>
          <p>Category 1</p>
        </div>
      </div>
      <div className='box'>
        <div className='box-inner-top'></div>
        <div className='box-inner-bottom'>
          <p>Category 2</p>
        </div>
      </div>
      <div className='box'>
        <div className='box-inner-top'></div>
        <div className='box-inner-bottom'>
          <p>Category 3</p>
        </div>
      </div>
      <div className='box'>
        <div className='box-inner-top'></div>
        <div className='box-inner-bottom'>
          <p>Category 4</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBox;
