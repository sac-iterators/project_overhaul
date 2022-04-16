
import './Home.css';

import React from "react";
import Categories from "./Categories";
import items from "./data";
import Navigation from './Navigation';

const Menu = ({ items }) => {
    return (
      <div className='menu'>
        <Navigation/>
        <div className="top-section">
        {items.map((item) => {
          const { id, title, img, desc, price } = item;
          return (
            <article key={id} className="menu-items">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
              
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
        </div>
      </div>
    );
  }
  
  export default Menu;