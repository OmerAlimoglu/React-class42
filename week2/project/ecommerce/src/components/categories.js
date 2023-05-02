import React, { useState, useEffect } from "react";
import "./Categories.css";

const Categories = ({ handleCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

  const handleCategoryClick = (index) => {
    setSelectedCategoryId(index);
    const categoryName = categories[index];
    handleCategoryChange(categoryName);
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          value={index}
          onClick={(e) => {
            handleCategoryClick(e.target.value);
          }}
          className={selectedCategoryId === index ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
