// src/app/_components/SideBar.jsx
"use client";
import { useContext, useState, useEffect } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { HomeIcon, Users, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SideBarContext } from '../../../../contexts/SideBarContext'

function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(SideBarContext);
  const [collapsed, setCollapsed] = useState(true);
  const route = useRouter();

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      name: 'HOME',
      link: '/dashboard',
      icon: <HomeIcon className='mx-3' />,
      id: 1,
    },
    {
      name: 'CUSTOMERS',
      link: '/dashboard/customers',
      icon: <Users className='mx-3' />,
      id: 2,
    },
  ];

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  useEffect(() => {

  }, [showSideBar]);

  return (
    <div>
      {showSideBar && (
        <Sidebar className='z-0' collapsed={showSideBar}>
          <Menu className='fixed pt-14 border-2 border-white border-r-slate-400 shadow-md shad border-opacity-25 text-slate-900 h-[95%] bottom-0'>
            
            {menuItems.map((item) => (
              <MenuItem key={item.id} className='hover:text-blue-600'>
                <a href={item.link} className='flex'>
                  {item.icon}
                  {item.name}
                </a>
              </MenuItem>
            ))}
            <div className='h-64'></div>
          </Menu>
        </Sidebar>
      )}
    </div>
  );
}

export default SideBar;
