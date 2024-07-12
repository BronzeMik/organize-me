// src/app/(routes)/dashboard/layout.jsx
"use client";
import React, {useContext} from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';
import { SideBarContext, SideBarProvider } from '../../../contexts/SideBarContext';
import {SearchSortProvider} from '../../../contexts/SearchSortProvider'
import {SortByProvider} from '../../../contexts/SortByProvider'
import { CurrentEmailProvider } from '@/src/contexts/CurrentEmailProvider';


function Layout({ children }) {


  return (
    <SideBarProvider>
      <SortByProvider>
      <SearchSortProvider>
        <CurrentEmailProvider>
        <div className='flex bg-white overflow-x-hidden'>
          {/* <div>
            
            <Header />
          </div> */}

            <div className='flex w-[100vw]'>
              <SideBarContainer />
              <div className='flex justify-between md:justify-center w-full pl-5'>
                <Header />
                <div className='pt-16 w-full pl-3'>
                  {children}
                </div>
              </div>
            </div>

        </div>
        </CurrentEmailProvider>
      </SearchSortProvider>
      </SortByProvider>
    </SideBarProvider>
  );
}

const SideBarContainer = () => {
  const { showSideBar } = useContext(SideBarContext);

  return (
    <div className={``}>
      <SideBar />
    </div>
  );
};


export default Layout;
