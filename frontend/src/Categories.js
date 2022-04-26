import React from "react";

const allCategories = ['all','all day specials','appetizers','seafood platter', 'add ins', 'beef', 'chicken', 'chow mein', 'combinations', 'deep fried goodiness', 'dessert', 'fried rice',
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