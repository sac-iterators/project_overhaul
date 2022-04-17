import './Home.css';

import React from "react";
//import Categories from "./Categories";
//import items from "./data";
import { menu_Chow_Mein } from './firebase/firebaseConfig';
import { useState, useEffect, ReactDOM} from 'react';
import {collection, doc, setDoc, addDoc, getDocs} from 'firebase/firestore';



function Menu() {

  const [food, setFood] = useState([]);

  useEffect(() => {
    const getFood = async () => {
        const data = await getDocs(menu_Chow_Mein);
        setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));

    };
    getFood();
  }, []);
  
  return(
      <div className='menu'>
        <div className="top-section"></div>
        {food.map((item) => {
          return (
            <article key={item.id} className="menu-items">
              <img src={item.ImageURL} alt={item.Name} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{item.Name}</h4>
                  <h4 className="price">${item.Price}</h4>
                </header>
                <p className="item-text">{item.Description}</p>
              </div>
            </article>
          );
        })}
        </div>
    );
  }
  
  export default Menu;