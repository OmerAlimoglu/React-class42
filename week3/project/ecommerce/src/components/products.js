import React from "react";
import "./Product.css";
import useFetch from "../useFetch.js";
import Product from "./Product";

const Products = ({ categoryName }) => {
  const url = categoryName
    ? `https://fakestoreapi.com/products/category/${categoryName}`
    : `https://fakestoreapi.com/products`;

  console.log("Products component rendering...");

  const { data: products, error, loading } = useFetch(url);

  return (
    <div className="products">
      {loading ? (
        <div className="loading">{loading}</div>
      ) : error ? (
        <p>Something went wrong: {error.toString()}</p>
      ) : categoryName && products && products.length === 0 ? (
        <p>No products found for {categoryName}</p>
      ) : (
        products.map(({ id, image, title }) => (
          <Product key={id} id={id} image={image} title={title} />
        ))
      )}
    </div>
  );
};

export default Products;
