import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <div className="about-image glass">
           <img src="/hero-bg.png" alt="Coffee Shop Interior" />
        </div>
        <div className="about-content">
          <h2 className="title-lg">Our <span className="text-accent">Story</span></h2>
          <p>Founded in 2026, Lumina Coffee started with a simple mission: to bring exceptional, ethically sourced coffee to our community. We believe that coffee is more than just a drink; it's an experience that brings people together.</p>
          <p>Our expert baristas are dedicated to the craft, ensuring that every cup is brewed to perfection. From our carefully selected beans to our beautifully designed space, every detail is crafted to provide you with a moment of peace in your busy day.</p>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
