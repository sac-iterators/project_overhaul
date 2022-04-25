import React, { useState } from "react";
import Home from "./Home";
import Navigation from './Navigation';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Fire from './firebase/firebase-test'
import FireMenu from './firebase/firebase-menu'
import Menu from './Menu';
import items from "./data";
import Categories from "./Categories";
import logo from "./img/logo.jpg"; // this could be a placeholder until we get their official logo

function App () {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuApp />} />
        <Route path= "/fire" element={<Fire />}/>
        <Route path="/firemenu" element={<FireMenu />}/>
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

// Saul's implementation
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items) // assuming items is from firebase;
  const [activeCategory, setActiveCategory] = useState("all");

const filterItems = items?.filter(item => {
        switch (activeCategory) {
            case 'all':
                return true
            case 'development':
            case 'design':
            case 'sales':
                  //assuming you have category of category in your firebase
                return item.category === activeCategory
            default:
                return true
        }
    })
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <Menu items={filterItems} />
      </section>
    </main>
  );
};

export default App;
