import React, { useState } from "react";
import "./App.css";
import Categories from "./components/categories";
import Products from "./components/products";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [categoryName, setCategoryName] = useState(null);

  const handleCategoryChange = (categoryName) => {
    setCategoryName(categoryName);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Categories handleCategoryChange={handleCategoryChange} />
        <Routes>
          <Route path="/" element={<Products categoryName={categoryName} />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
