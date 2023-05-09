import React, { useContext } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./FavoritesContext";
import useFetch from "../useFetch.js";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";

const Products = ({ categoryName }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const url = categoryName
    ? `https://fakestoreapi.com/products/category/${categoryName}`
    : `https://fakestoreapi.com/products`;

  console.log("Products component rendering...");

  const { data: products, error, loading } = useFetch(url);
  console.log(products);

  const handleFavoriteToggle = (productId) => {
    toggleFavorite(productId);
  };

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
          <div key={id} className="product">
            <Link to={`/product/${id}`}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
            </Link>
            <button onClick={() => handleFavoriteToggle(id)}>
              {favorites && favorites.includes(id) ? (
                <HeartSolid />
              ) : (
                <HeartRegular />
              )}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
