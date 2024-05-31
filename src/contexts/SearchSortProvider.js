"use client"
import { createContext, useState, useEffect } from 'react';

export const SearchSortContext = createContext();

export const SearchSortProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchSortContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchSortContext.Provider>
  );
};
