import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass-dark">
      <div className="container nav-container">
        <a href="#" className="logo text-accent">
          Lumina Coffee
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="btn btn-accent">Order Now</button>
      </div>
    </header>
  );
};

export default Navbar;
