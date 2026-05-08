import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-dark">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>Lumina Coffee</h2>
          <p>&copy; 2026 All rights reserved.</p>
        </div>
        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
