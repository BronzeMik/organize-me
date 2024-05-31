// src/app/(routes)/dashboard/layout.jsx
"use client";
import React from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';
import { SideBarProvider } from '../../../contexts/SideBarContext';
import {SearchSortProvider} from '../../../contexts/SearchSortProvider'
import {SortByProvider} from '../../../contexts/SortByProvider'

function Layout({ children }) {
  return (
    <SideBarProvider>
      <SortByProvider>
      <SearchSortProvider>
        <div className='flex min-h-screen bg-white'>
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
      </SearchSortProvider>
      </SortByProvider>
    </SideBarProvider>
  );
}

export default Layout;
