import React, { createContext, useState } from "react";

export const FavoritesContext = createContext([]);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((favorites) => {
      if (favorites.includes(productId)) {
        return favorites.filter((id) => id !== productId);
      } else {
        return [...favorites, productId];
      }
    });
  };

  const getFavorites = () => {
    return favorites;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, getFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
