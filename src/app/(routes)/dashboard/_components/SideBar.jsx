"use client"
import { useContext, useEffect, useState } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Home, Folder, Message } from '@mui/icons-material';
import { HomeIcon, Users, SquareMenu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SideBarContext } from '../layout';

function SideBar() {
const {showSideBar, setShowSideBar} = useContext(SideBarContext);
const [collapsed, setCollapsed] = useState(true);
const route = useRouter();
const [isClient, setIsClient] = useState(false)
 

const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
const menuItems = [
    {
        name: 'HOME',
        link: '/dashboard',
        icon: <HomeIcon className='mx-3' />,
        id: 1
    },
    {
        name: 'CUSTOMERS',
        link: '/dashboard/customers',
        icon: <Users className='mx-3' />,
        id: 2
    }
]

const handleCloseSidebar = () => {
  setShowSideBar(false);
};

  useEffect(() =>{
    console.log(showSideBar)
  }, [showSideBar])

  return (
    <div>
        {showSideBar ? <Sidebar className='fixed z-50 min-h-screen' collapsed={collapsed}>
            
            
            <Menu className='p-5 fixed bg-blue-600 text-white h-screen'>
            <X onClick={handleCloseSidebar} className='cursor-pointer' /> 
            <div className='h-80'></div>
            {menuItems.map((item, index) => (
                
                    <MenuItem key={index} className='hover:text-blue-600'>
                    <a href={item.link} className='flex'>{item.icon}{item.name}</a>
                    </MenuItem>
            ))}
            <div className='h-64'></div>
            </Menu>
            
        </Sidebar> : ''}
    </div>
  )
}

export default SideBar
