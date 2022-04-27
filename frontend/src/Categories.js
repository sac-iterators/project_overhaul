import React from "react";

const allCategories = ['All','All Day Specials','Appetizers', 'Add Ins',
'Beef', 'Chicken', 'Chow Mein', 'Combo', 'Deep Fried Goodiness', 'Dessert', 'Fried Rice',
'Pork', 'Seafood Platter', 'Sides', 'Vegetables', 'Whats Cooking', 'Wing']

const Categories = ({ activeCategory, setActiveCategory, }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;