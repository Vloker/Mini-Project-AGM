'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';

const SidebarAdmin = () => {
    
    return (
      <Sidebar 
          aria-label="Default sidebar example" 
          className='font-montserrat'
          >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              active
              icon={HiUser}
            >
              <p>
                Costumers
              </p>
            </Sidebar.Item>
           
            <Sidebar.Item
              href="/"
              icon={HiArrowSmRight}
            >
              <p>
                Logout
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    )
}
export default SidebarAdmin

