import React, { useState } from "react";
import allCategories from "../fake-data/all-categories.js";
import "./Categories.css";

const Categories = ({ handleSelectCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const categories = allCategories;

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={(index) => {
            setSelectedCategoryId(index);
            handleSelectCategory(index);
          }}
          // className={selectedCategoryId === index ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
