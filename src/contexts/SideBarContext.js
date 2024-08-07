"use client"
import { createContext, useState, useEffect } from 'react';

export const SideBarContext  = createContext();

export const SideBarProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
