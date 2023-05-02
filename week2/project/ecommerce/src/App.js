import React, { useState } from "react";
import "./App.css";
import Categories from "./components/categories";
import Products from "./components/products";

function App() {
  const [categoryName, setCategoryName] = useState(null);

  const handleCategoryChange = (categoryName) => {
    setCategoryName(categoryName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <Categories handleCategoryChange={handleCategoryChange} />
        <Products categoryName={categoryName} />
      </header>
    </div>
  );
}

export default App;
