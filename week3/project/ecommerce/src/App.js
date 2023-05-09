import React, { useState } from "react";
import "./App.css";
import Categories from "./components/categories";
import Products from "./components/products";
import ProductCard from "./components/ProductCard";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./components/FavoritesContext";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [categoryName, setCategoryName] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const handleCategoryChange = (categoryName) => {
    setCategoryName(categoryName);
  };

  const handleProductsChange = (products) => {
    setAllProducts(products);
  };

  return (
    <BrowserRouter>
      <FavoritesProvider allProducts={allProducts}>
        <div className="App">
          <h1>Products</h1>
          <nav className="navbar">
            <Categories handleCategoryChange={handleCategoryChange} />
            <NavLink to="/">
              <span>Products</span>
            </NavLink>
            <NavLink to="/favorites">
              <span>Favorites</span>
            </NavLink>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  categoryName={categoryName}
                  onProductsChange={handleProductsChange}
                />
              }
            />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route
              path="/favorites"
              element={<Favorites allProducts={allProducts} />}
            />
          </Routes>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
