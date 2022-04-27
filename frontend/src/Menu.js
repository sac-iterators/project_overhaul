import './Home.css';

import React from "react";
//import Categories from "./Categories";
//import items from "./data";
import { Full_Menu } from './firebase/firebaseConfig';
import { useState, useEffect, ReactDOM} from 'react';
import {collection, doc, setDoc, addDoc, getDocs} from 'firebase/firestore';
import Navigate from './Navigation';
import Categories from "./Categories";
import items from "./data";



function Menu() {

 // Variable used to store items/information from the database
  const [food, setFood] = useState([]);

  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState("all");

  function categorySwitch(cat) {
    setActiveCategory(cat);
    console.log(cat)
  }

  const filterItems = items?.filter(item => {
        switch (activeCategory) {
          case 'all':
            return true
          case 'allDaySpecials':
            break
          case 'appetizers':
              break
          case 'addIns':
              break
          case 'beef':
          case 'chicken':
          case 'chowMein':
          case 'combinations':
          case 'deepFriedGoodiness':
          case 'dessert':
          case 'flavor':
          case 'friedRice':
          case 'hot':
          case 'pork':
          case 'seafoodPlatter':
          case 'sides':
          case 'vegetable':
          case 'whatsCooking':
          case 'wing':
                return item.category === activeCategory
            default:
                return true
        }
    });

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

    <main>
      <section className="menu section">
        <div className="title">
          
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          setActiveCategory={categorySwitch}
          activeCategory={activeCategory}
        />
        <div className='menu'>
        <Navigate/>
        <div className="top-section"></div>
        {food.map((item) => {
          if (activeCategory == 'All') {
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
          } else if (activeCategory == item.Category) {
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
          }
        })}
        </div>
      </section>
    </main>
    );
  }
  
  export default Menu;