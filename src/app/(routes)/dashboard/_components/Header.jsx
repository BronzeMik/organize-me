import { UserButton } from '@clerk/nextjs'
import { Menu, SquareMenu } from 'lucide-react'
import React, { useContext } from 'react'
import { SideBarContext } from '../../../../contexts/SideBarContext';

function Header() {
  const {showSideBar, setShowSideBar} = useContext(SideBarContext);
  const handleOpenSidebar = () => {
    setShowSideBar(true);
  };

  return (
    <div className={`flex w-full p-6 border-solid border-slate-200 border-2 bg-white ${showSideBar ? 'justify-end': 'justify-between'}`}>
        {showSideBar == false && <Menu onClick={handleOpenSidebar}  className='cursor-pointer'/>}
        <UserButton />
    </div>
  )
}

export default Header
