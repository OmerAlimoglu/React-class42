import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { useParams, Link } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        setProduct(product);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="product-card">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <p>Something went wrong: {error}</p>
      ) : (
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-text">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link to="/">Back to all products</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
