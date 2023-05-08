import React, { useState, useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Products = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = categoryName
          ? `https://fakestoreapi.com/products/category/${categoryName}`
          : `https://fakestoreapi.com/products`;
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  return (
    <div className="products">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <p>Something went wrong: {error}</p>
      ) : categoryName && products.length === 0 ? (
        <p>No products found for {categoryName}</p>
      ) : (
        products.map(({ id, image, title }) => (
          <div key={id} className="product">
            {categoryName ? (
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </Link>
            ) : (
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </Link>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
