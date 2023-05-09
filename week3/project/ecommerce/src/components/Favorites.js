import React, { useContext } from "react";
import Product from "./Product";
import useFetch from "../useFetch.js";
import "./favorites.css";
import { FavoritesContext } from "./FavoritesContext";

const Favorites = () => {
  const {
    data: allProducts,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  const { favorites } = useContext(FavoritesContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const favoriteProducts = allProducts.filter((product) =>
    favorites.includes(product.id)
  );
  return (
    <>
      <h2 className="favorites-head">Your Favorites</h2>
      <div className="favorites">
        {favoriteProducts.map(({ id, image, title }) => (
          <Product key={id} id={id} image={image} title={title} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
