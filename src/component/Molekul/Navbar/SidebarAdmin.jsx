'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import {useNavigate} from 'react-router-dom';

const SidebarAdmin = () => {

  const navigate = useNavigate()

  const handleClik = () => {
    const isUserConfirmed = window.confirm('Apakah anda ingin Logout?');
    if(isUserConfirmed) {
      localStorage.setItem('isLoggedIn', false)
      navigate('/')
      window.location.reload()
    }
  }
    
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
              <button>
                Costumers
              </button>
            </Sidebar.Item>
           
            <Sidebar.Item
              href="/"
              icon={HiArrowSmRight}
            >
              <button onClick={handleClik}>
                Logout
              </button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    )
}
export default SidebarAdmin

