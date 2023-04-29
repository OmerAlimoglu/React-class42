import React from "react";
import allProducts from "../fake-data/all-products.js";
import "./Product.css";

const Products = ({ category }) => {
  const products = allProducts.filter((product) => {
    const categoryName = product.category.replace("FAKE: ", "");
    return product.category === categoryName;
  });

  return (
    <div className="products">
      {category === allProducts.category
        ? products.map((product) => {
            return (
              <li className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </li>
            );
          })
        : products
            .filter((product) => category === product.category)
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
