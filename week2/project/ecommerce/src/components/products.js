import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="products">
      {category === null
        ? products.map((product) => {
            return (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            );
          })
        : products
            .filter((product) => {
              const categoryName = category.replace("FAKE: ", "");
              return product.category === categoryName;
            })
            .map((product) => {
              return (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </div>
              );
            })}
    </div>
  );
};

export default Products;
