import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import './styles/navBar.css';

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
      <div className='gp-items-left'>
        <div className='search-bar'>
          <input type='text' placeholder='Search for a product' />
          <div className='search-icon-container'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
          </div>
        </div>
      </div>
      <div className='gp-items-right'>
        <ul className='nav-link-container'>
          <li className='nav-link'>
            <FontAwesomeIcon icon={faUser} className='user-icon' />
            <p>Sign in</p>
          </li>
          <li className='nav-link'>
            <p>Categories</p>
            <FontAwesomeIcon icon={faChevronDown} className='chevron-icon' />
          </li>
          <li className='nav-link'>
            <p>Deals</p>
            <FontAwesomeIcon icon={faChevronDown} className='chevron-icon' />
          </li>
          <li className='nav-link'>
            <p>Orders</p>
            <FontAwesomeIcon icon={faChevronDown} className='chevron-icon' />
          </li>
          <div className='cart-icon-container'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
