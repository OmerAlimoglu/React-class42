import React from "react";
import allProducts from "./fake-data/all-products.js";

const Products = ({ categoryId }) => {
  const products = allProducts.filter(
    (product) => product.category === categoryId
  );

  return (
    <div className="products">
      {products.map((product) => (
        <li className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </li>
      ))}
    </div>
  );
};

export default Products;
