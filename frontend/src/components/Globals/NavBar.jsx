import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faChevronUp,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import './styles/navBar.css';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  const handleDropdownToggle = (button) => {
    if (openDropdown === button) {
      setOpenDropdown(null);
    } else setOpenDropdown(button);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest('.nav-link')
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <li
            className='nav-link'
            onClick={() => handleDropdownToggle('categories')}
          >
            <p>Categories</p>
            <FontAwesomeIcon
              icon={openDropdown === 'categories' ? faChevronUp : faChevronDown}
              className='chevron-icon'
            />
          </li>
          <li
            className='nav-link'
            onClick={() => handleDropdownToggle('deals')}
          >
            <p>Deals</p>
            <FontAwesomeIcon
              icon={openDropdown === 'deals' ? faChevronUp : faChevronDown}
              className='chevron-icon'
            />
          </li>
          <li
            className='nav-link'
            onClick={() => handleDropdownToggle('orders')}
          >
            <p>Orders</p>
            <FontAwesomeIcon
              icon={openDropdown === 'orders' ? faChevronUp : faChevronDown}
              className='chevron-icon'
            />
          </li>
          <div className='cart-icon-container'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
          </div>
        </ul>

        {openDropdown === 'categories' && (
          <div className='categories-dropdown-menu' ref={dropdownRef}>
            <ul>
              <li>Football</li>
              <li>F1</li>
              <li>Cricket</li>
              <li>Rugby Union</li>
              <li>Rugby League</li>
              <li>Golf</li>
              <li>Boxing</li>
              <li>Olympics</li>
              <li>NFL</li>
              <li>Tennis</li>
              <li>Racing</li>
              <li>Darts</li>
              <li>Netball</li>
              <li>MMA</li>
              <li>More Sports</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
