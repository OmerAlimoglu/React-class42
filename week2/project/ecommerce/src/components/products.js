import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="products">
      {products.map((item) => {
        return (
          <div key={item.id} className="product">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
