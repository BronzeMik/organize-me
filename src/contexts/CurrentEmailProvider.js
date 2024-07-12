"use client"
import { createContext, useState, useEffect } from 'react';

export const CurrentEmailContext = createContext();

export const CurrentEmailProvider = ({ children }) => {
  const [currentEmail, setCurrentEmail] = useState('');

  return (
    <CurrentEmailContext.Provider value={{ currentEmail, setCurrentEmail }}>
      {children}
    </CurrentEmailContext.Provider>
  );
};
