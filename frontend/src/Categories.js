import React from "react";

const allCategories = ['all','allDaySpecials','appetizers', 'addIns', 'beef', 'chicken', 'chowMein', 'combo', 'deepFriedGoodiness', 'dessert', 'friedRice',
'pork', 'seafoodPlatter', 'sides', 'vegetables', 'whatsCooking', 'wing']

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