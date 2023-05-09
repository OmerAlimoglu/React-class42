import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./FavoritesContext";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";

const Product = ({ id, image, title }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    toggleFavorite(id);
  };

  return (
    <div key={id} className="product">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <button onClick={(e) => handleFavoriteToggle(e)}>
          {favorites && favorites.includes(id) ? (
            <HeartSolid />
          ) : (
            <HeartRegular />
          )}
        </button>
      </Link>
    </div>
  );
};

export default Product;
