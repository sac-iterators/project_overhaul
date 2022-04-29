import {React, useState} from "react";
import {Tabs, Tab} from 'react-bootstrap'

const allCategories = ['All','All Day Specials','Appetizers', 'Add Ins',
'Beef', 'Chicken', 'Chow Mein', 'Combo', 'Deep Fried Goodiness', 'Dessert', 'Fried Rice',
'Pork', 'Seafood Platter', 'Sides', 'Vegetables', 'Whats Cooking', 'Wing']

const Categories = ({ activeCategory, setActiveCategory, }) => {
  
  const [key, setKey] = useState('All');
  
  return (
      <Tabs
        id="menu-tab-wrapper"
        activeKey={key}
        onSelect={(k) => {setKey(k); setActiveCategory(k)}}
        className="horizontal-scroll"
      >
      {/*<div className="btn-container horizontal-scroll">*/}
        {allCategories.map((category, index) => {
          return (      
            <Tab eventKey={category} title={category} key={index}></Tab>
            /*<button
              type="button"
              className={`${
                activeCategory === category ? "filter-btn active" : "filter-btn"
              }`}
              key={index}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>*/
          );
        })}
      </Tabs>
      //</div>
  );
};

export default Categories;