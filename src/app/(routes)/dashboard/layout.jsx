"use client"
import React, { useEffect, useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { createContext } from 'react'

export const SideBarContext = createContext();



function layout({children}) {
  const [showSideBar, setShowSideBar] = useState();
  return (
    <SideBarContext.Provider value={{showSideBar, setShowSideBar}}>
    <div className='flex min-h-screen'>
        <div className=''>
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

  )
}

export default layout
