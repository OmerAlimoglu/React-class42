import React from "react";
import allProducts from "../fake-data/all-products.js";
import "./Product.css";

const Products = ({ category }) => {
  const products = allProducts;

  return (
    <div className="products">
      {category === null
        ? products.map((product) => {
            return (
              <li className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </li>
            );
          })
        : products
            .filter((product) => {
              const categoryName = category.replace("FAKE: ", "");
              return product.category === categoryName;
            })
            .map((product) => {
              return (
                <li className="product" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </li>
              );
            })}
    </div>
  );
};

export default Products;
