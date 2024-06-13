import { UserButton } from '@clerk/nextjs'
import { Bell, Mail, Menu, Search, Settings, SquareMenu } from 'lucide-react'
import React, { useContext } from 'react'
import { SideBarContext } from '../../../../contexts/SideBarContext';

function Header() {
  const {showSideBar, setShowSideBar} = useContext(SideBarContext);
  const handleOpenSidebar = () => {
    setShowSideBar(true);
  };

  return (
    <div className={`flex w-full bg-slate-900 items-center text-white p-6 z-50 fixed border-solid border-slate-900 border-2 h-7  justify-between`}>
        {/* {showSideBar == false && <Menu onClick={handleOpenSidebar}  className='cursor-pointer'/>} */}
        <div className='px-3'>
          <form className='border-solid border-2 border-slate-900 border-b-white'>
            <input type='text' placeholder='Search projects' className='bg-slate-900 '/>
            <button type='submit'>
              <Search />
            </button>
          </form>
        </div>
        <div className='flex justify-between w-1/5 items-center'>
          <Settings className='hover:text-blue-700 cursor-pointer'/>
          <Bell className='hover:text-blue-700 cursor-pointer'/>
          <a href='/dashboard/inbox'><Mail className='hover:text-blue-700 cursor-pointer'/></a>
          <UserButton />
        </div>
        
    </div>
  )
}

export default Header
