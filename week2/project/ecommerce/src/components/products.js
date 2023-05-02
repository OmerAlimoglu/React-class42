import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  console.log(categoryName);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (categoryName) {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${categoryName}`
          );
        } else {
          response = await fetch(`https://fakestoreapi.com/products`);
        }
        const products = await response.json();
        setProducts(products);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, [categoryName]);

  return (
    <div className="products">
      {error ? (
        <p>Something went wrong: {error}</p>
      ) : categoryName && products.length === 0 ? (
        <p>No products found for {categoryName}</p>
      ) : (
        products.map((product) => {
          return (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
