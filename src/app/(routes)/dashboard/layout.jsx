"use client";
import React, { useEffect, useState, createContext } from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';

export const SideBarContext = createContext();

function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      <div className='flex min-h-screen'>
        <div>
          <SideBar />
        </div>
        <div className='flex flex-col w-full'>
          <Header />
          <div className='flex justify-end md:justify-center'>
            {children}
          </div>
        </div>
      </div>
    </SideBarContext.Provider>
  );
}

export default Layout;
