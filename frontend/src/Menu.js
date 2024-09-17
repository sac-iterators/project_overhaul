import './Home.css';

import React from "react";
import { Full_Menu } from './firebase/firebaseConfig';
import { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import Navigate from './Navigation';
import Categories from "./Categories";
import Footer from "./Footer";



function Menu() {

  const [food, setFood] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  function categorySwitch(cat) {
    setActiveCategory(cat);
    console.log(cat)
  }

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
        <div className='container menu-categories'>
          <Categories
            setActiveCategory={categorySwitch}
            activeCategory={activeCategory}
          />
        </div>
        <div className='menu menu-items-container'>
        <Navigate/>
        <div className="top-section"></div>
        {food.map((item) => {
          if (activeCategory === 'All') {
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
          } else if (activeCategory === item.Category) {
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
      <Footer />
    </main>
    
    );
  }
  
  export default Menu;