"use client"

import { UserButton } from '@clerk/nextjs'
import { Bell, Mail, Menu, Search, Settings, SquareMenu } from 'lucide-react'
import React, { useContext } from 'react'
import { SideBarContext } from '../../../../contexts/SideBarContext';
import { useRouter } from 'next/navigation';

function Header() {
  const {showSideBar, setShowSideBar} = useContext(SideBarContext);
  const route = useRouter();
  const handleOpenSidebar = () => {
    setShowSideBar(true);
  };

const goToInbox = () => {
  route.replace('/dashboard/inbox')
}

  return (
    <div className={`flex w-[97%] bg-white shadow-md items-center text-slate-900 p-6 z-20 fixed border-solid border-slate-100 border-2 h-7  justify-between`}>
        {/* {showSideBar == false && <Menu onClick={handleOpenSidebar}  className='cursor-pointer'/>} */}
        <div className='px-3'>
          {/* <form className='bg-opacity-0 border-solid border-2 border-opacity-0 border-b-slate-900 text-slate-900'>
            <input type='text' placeholder='Search customers' className='bg-opacity-0 focus:outline-none'/>
            <button type='submit' className='bg-opacity-0 text-slate-900 p-0 m-0'>
              <Search />
            </button>
          </form> */}
        </div>
        <div className='flex justify-between w-1/5 items-center'>
          <Settings className='hover:text-blue-700 cursor-pointer'/>
          <Bell className='hover:text-blue-700 cursor-pointer'/>
          <div onClick={() => goToInbox()}><Mail className='hover:text-blue-700 cursor-pointer'/></div>
          <UserButton />
        </div>
        
    </div>
  )
}

export default Header
