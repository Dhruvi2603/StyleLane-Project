import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import all_product from '../componenets/assets/all_product'; // Ensure this is the correct import path

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize items with all_product data
    setItems(all_product);
  }, []);

  const searchItems = (term) => {
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredItems);

    // Navigate to the search results page
    navigate('/search');
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, searchItems }}>
      {children}
    </SearchContext.Provider>
  );
};
