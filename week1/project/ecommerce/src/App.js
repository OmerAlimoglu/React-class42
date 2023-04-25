import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Categories from "./categories.js";
import Products from "./products.js";

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Categories onSelectCategory={handleSelectCategory} />
        {selectedCategoryId && <Products categoryId={selectedCategoryId} />}
      </header>
    </div>
  );
}

export default App;
