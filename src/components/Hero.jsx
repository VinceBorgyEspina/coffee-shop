import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: "url('/hero-bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="glass-dark hero-card animate-fade-in delay-1">
          <h1 className="title-xl">Awaken Your <br/><span className="text-accent">Senses</span></h1>
          <p className="hero-text">Experience the finest artisanal coffee, crafted with passion and precision. Every cup tells a story.</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-accent">View Menu</a>
            <a href="#about" className="btn btn-outline">Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
