"use client"
import { createContext, useState, useEffect } from 'react';

export const SortByContext = createContext();

export const SortByProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState(null);

  return (
    <SortByContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortByContext.Provider>
  );
};
