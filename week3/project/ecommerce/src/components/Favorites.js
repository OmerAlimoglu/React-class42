import React, { useContext } from "react";
import Product from "./Product";
import useFetch from "../useFetch.js";
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
    <div>
      <h2>Your Favorites</h2>
      {favoriteProducts.map(({ id, image, title }) => (
        <Product key={id} id={id} image={image} title={title} />
      ))}
    </div>
  );
};

export default Favorites;
