// src/app/_components/SideBar.jsx
"use client";
import { useContext, useState, useEffect } from 'react';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { HomeIcon, MenuIcon, Users, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { SideBarContext } from '../../../../contexts/SideBarContext'

function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(SideBarContext);
  const [collapsed, setCollapsed] = useState(true);
  const route = useRouter();
  const path = usePathname();

  let pathName = path.split('/');




  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      name: 'HOME',
      link: '/dashboard',
      icon: <HomeIcon className='mx-3 min-w-6' />,
      id: 1,
    },
    {
      name: 'CUSTOMERS',
      link: '/dashboard/customers',
      icon: <Users className='mx-3 min-w-6' />,
      id: 2,
    },
  ];

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  useEffect(() => {

  }, [showSideBar]);

  const changeRoute = (path) => {
    route.replace(path)
  }

  return (
    <div className=''>
      {showSideBar && (
        <Sidebar className='z-50 ' collapsed={showSideBar}>
          
          <Menu className={`fixed shadow-md shad border-opacity-25 bg-blue-900 text-white ${collapsed ? 'w-[5%]' : 'w-[15%]'} h-screen bottom-0`}>
          {collapsed ? <MenuIcon onClick={handleToggleSidebar} className='text-white mb-14 mt-6 ml-2 cursor-pointer'></MenuIcon> :
            <X onClick={handleToggleSidebar} className='text-white mb-14 mt-6 ml-2 cursor-pointer'/>
          }
            {menuItems.map((item) => (
              <>
              { path == item.link ? 
                <MenuItem key={item.id} className={`text-slate-900 bg-white`}>
                <div className='flex' onClick={() => changeRoute(item.link)}>
                  {item.icon}
                  {collapsed == false &&  item.name}
                </div>
                </MenuItem> : (
                  <MenuItem key={item.id} className='hover:text-slate-900 hover:bg-white'>
                  <div className='flex' onClick={() => changeRoute(item.link)}>
                    {item.icon}
                    {collapsed == false &&  item.name}
                    
                  </div>
                  </MenuItem>
                )
              }
              </>
            ))}
            <div className='h-64'></div>
          </Menu>
        </Sidebar>
      )}
    </div>
  );
}

export default SideBar;
