import React from "react";
import allCategories from "./fake-data/all-categories.js";

const Categories = ({ onSelectCategory }) => {
  const categories = allCategories;

  const handleSelectCategory = (categoryId) => {
    onSelectCategory(categoryId);
  };

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleSelectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
