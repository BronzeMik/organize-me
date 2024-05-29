// src/app/(routes)/dashboard/layout.jsx
"use client";
import React from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';
import { SideBarProvider } from '../../../contexts/SideBarContext';

function Layout({ children }) {
  return (
    <SideBarProvider>
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
    </SideBarProvider>
  );
}

export default Layout;
