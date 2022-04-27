import React from "react";

const allCategories = ['all','allDaySpecials','appetizers', 'add ins', 'beef', 'chicken', 'chow mein', 'combinations', 'deepFriedGoodiness', 'dessert', 'fried rice',
'pork', 'seafood platter', 'sides', 'vegetable', 'whats cooking', 'wing']

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