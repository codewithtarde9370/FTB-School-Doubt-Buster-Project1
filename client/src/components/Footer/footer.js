import React from 'react';
import { Link } from 'react-router-dom';
import Pay1 from './pay1.png';
import Pay2 from './pay2.png';
import Pay3 from './pay3.png';
import Pay4 from './pay4.png';
import Connect1 from './connect1.png';
import Connect2 from './connect2.png';
import Connect3 from './connect3.png';
import Connect4 from './connect4.png';
import './footer.css';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-grid">
          <div className='footer-text'>
          <h3>Quick Links</h3>
          <p>Explore the web faster with our URL shortener. Create, share, and manage short links easily.</p>
          </div>
          <p>Accepted payment methods</p>
          <div className="payment">
            <img src={Pay1} alt='amex' />
            <img src={Pay2} alt='mastercard' />
            <img src={Pay3} alt='paypal' />
            <img src={Pay4} alt='visa' />
          </div>
        </div>

        <div className='footer-grid'>
          <h3>Recent News</h3>
          <ul>
          <li>New Features: Custom Branded Links for Your Business</li>
    <li>September Update: Enhanced Analytics for Your Shortened URLs</li>
    <li>Upcoming Webinar: Best Practices for Using URL Shorteners</li>

          </ul>
        </div> 

        <div className='footer-grid'>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/links">Links</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>       

        <div className='footer-grid'>
          <h3>The Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/business-tool">Free Business Tool</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/support">Help and Support</Link></li>
          </ul>
        </div>

        <div className='footer-grid'>
          <h3>Connect Us</h3>
          <div className="social-media">
            <img src={Connect1} alt='Instagram' />
            <img src={Connect2} alt='Facebook' />
            <img src={Connect3} alt='LinkedIn' />
            <img src={Connect4} alt='Twitter' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
