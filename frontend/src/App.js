import React, { useState } from "react";
import Home from "./Home";
import Navigation from './Navigation';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Fire from './firebase/firebase-test'
import FireMenu from './firebase/firebase-menu'
import Menu from './Menu';
import Auth from './AdminPortal';
import items from "./data";
import Categories from "./Categories";
import logo from "./img/logo.jpg"; // this could be a placeholder until we get their official logo
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute"
import AdminPortal from "./AdminPortal";
import ForgotPassword from "./ForgotPassword";

function App () {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuApp />} />
          <Route path= "/fire" element={<Fire />}/>
          <Route path="/firemenu" element={<FireMenu />}/>
          <Route path= "/admin" element={<Login />}/>
          <Route path="/adminPortal" element={
              <PrivateRoute>
                <AdminPortal />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </AuthProvider>
    </div>
  </BrowserRouter>
  
  );
}

// Saul's implementation
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState("all");

const filterItems = items?.filter(item => {
        switch (activeCategory) {
            case 'all':
                return true
            case 'all day specials':
            case 'appetizers':
            case 'add ins':
                return item.category === activeCategory
            default:
                return true
        }
    })
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          
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
