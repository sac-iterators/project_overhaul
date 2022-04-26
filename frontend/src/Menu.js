import './Home.css';

import React from "react";
//import Categories from "./Categories";
//import items from "./data";
import { Full_Menu } from './firebase/firebaseConfig';
import { useState, useEffect, ReactDOM} from 'react';
import {collection, doc, setDoc, addDoc, getDocs} from 'firebase/firestore';
import Navigate from './Navigation';



function Menu() {

 // Variable used to store items/information from the database
 const [food, setFood] = useState([]);

 // This function runs when the page is loaded
 useEffect(() => {
     // Const getFood will grab the documents from the database provided in getDocs()
     const getFood = async () => {
         const data = await getDocs(Full_Menu);
         setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));    // Maps the database data to food variable
     };

     getFood();
 }, []);
  
  return(
      <div className='menu'>
        <Navigate/>
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