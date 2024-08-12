// SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const clearSearchQuery = () => {
    setSearchQuery('');
    setFilteredProducts([]);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredProducts, setFilteredProducts, clearSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
