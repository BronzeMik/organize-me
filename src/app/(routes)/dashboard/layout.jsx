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
        <div className='flex bg-white'>
          <div>
            
            <Header />
          </div>
          <div className='flex w-[100vw]'>
            <div className='w-[15%]'>
              <SideBar />
            </div>
            <div className='flex justify-end md:justify-center pt-14 w-full'>
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
