'use client';
import { Dropdown, Navbar} from 'flowbite-react';
import { RxHamburgerMenu } from 'react-icons/rx';
import {useNavigate} from 'react-router-dom';

const NavbarLP = () => {

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
      <Navbar fluid rounded className='bg-green backdrop-blur-sm'>
        
        <Navbar.Brand >
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ShuttleSpot</span>
        </Navbar.Brand>

        <div className='flex items-center gap-6' >
        <Navbar.Collapse>
          <Navbar.Link href="/HomePage" className='text-white' >Dashboard</Navbar.Link>
          <Navbar.Link href="/Booking" className='text-white'>Booking</Navbar.Link>
        </Navbar.Collapse>

          <Dropdown
            arrowIcon={false}
            inline
            label={<RxHamburgerMenu className='text-white w-5 h-5'/>}
          >
            <Dropdown.Item onClick={handleClik}>
              Logout
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
    )
    
}
export default NavbarLP


