import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold, and perfectly extracted double shot.',
      price: '$3.50',
      image: '/espresso.png'
    },
    {
      id: 2,
      name: 'Vanilla Bean Latte',
      description: 'Smooth espresso with steamed milk and real vanilla bean.',
      price: '$4.50',
      image: '/latte.png'
    },
    {
      id: 3,
      name: 'Caramel Macchiato',
      description: 'Espresso marked with foam and a sweet caramel drizzle.',
      price: '$4.75',
      image: '/latte.png'
    },
    {
      id: 4,
      name: 'Butter Croissant',
      description: 'Flaky, buttery, freshly baked every morning.',
      price: '$3.00',
      image: '/pastry.png'
    }
  ];

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        <div className="menu-header">
          <h2 className="title-lg">Our <span className="text-accent">Menu</span></h2>
          <p>Handcrafted beverages and delightful treats.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card glass">
              <div className="menu-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="menu-card-content">
                <div className="menu-card-title-row">
                  <h3>{item.name}</h3>
                  <span className="text-accent price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
