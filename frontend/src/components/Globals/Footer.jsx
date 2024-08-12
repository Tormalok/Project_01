import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='section-container'>
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
            <li>
              <a href='/help'>Help Center</a>
            </li>
            <li>
              <a href='/returns'>Returns</a>
            </li>
            <li>
              <a href='/shipping'>Shipping Information</a>
            </li>
            <li>
              <a href='/order-tracking'>Order Tracking</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>About Us</h4>
          <ul>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/careers'>Careers</a>
            </li>
            <li>
              <a href='/press'>Press</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Policies</h4>
          <ul>
            <li>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms'>Terms of Service</a>
            </li>
            <li>
              <a href='/return-policy'>Return Policy</a>
            </li>
            <li>
              <a href='/shipping-policy'>Shipping Policy</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href='https://facebook.com/example'>Facebook</a>
            </li>
            <li>
              <a href='https://twitter.com/example'>Twitter</a>
            </li>
            <li>
              <a href='https://instagram.com/example'>Instagram</a>
            </li>
            <li>
              <a href='https://linkedin.com/company/example'>LinkedIn</a>
            </li>
            <li>
              <a href='https://pinterest.com/example'>Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
