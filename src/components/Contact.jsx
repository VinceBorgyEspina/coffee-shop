import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="title-lg">Get in <span className="text-accent">Touch</span></h2>
          <p>Have a question or want to order ahead? We'd love to hear from you.</p>
          <div className="info-block">
            <h3>Location</h3>
            <p>123 Coffee Lane<br/>Seattle, WA 98101</p>
          </div>
          <div className="info-block">
            <h3>Hours</h3>
            <p>Mon-Fri: 6am - 6pm<br/>Sat-Sun: 7am - 5pm</p>
          </div>
        </div>
        <div className="contact-form-wrapper glass">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
