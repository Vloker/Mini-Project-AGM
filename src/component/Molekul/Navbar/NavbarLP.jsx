'use client';
import { Navbar} from 'flowbite-react';
import {useNavigate} from 'react-router-dom';

const NavbarLP = () => {

  const navigate = useNavigate()
  
  // Authentication Logout
  const handleClik = () => {
    const isUserConfirmed = window.confirm('Apakah anda ingin Logout?');
      if(isUserConfirmed) {
        localStorage.setItem('isLoggedIn', false)
        navigate('/')
      }
    }

    return (
      <Navbar fluid rounded className='bg-green backdrop-blur-sm'>
        
        <Navbar.Brand >
        <img src="Logo.png" className="mr-1 ms-2 h-6 sm:h-9" />
          <span 
            className="self-center whitespace-nowrap text-xl font-semibold text-white">
            ShuttleSpot
          </span>
        </Navbar.Brand>

        <div className='flex items-center gap-6' >
          <Navbar.Collapse>

              <Navbar.Link 
                href="/HomePage" 
                className='text-white'>
                Dashboard
              </Navbar.Link>

              <Navbar.Link 
                href="/Booking" 
                className='text-white '>
                Booking
              </Navbar.Link>

              <button
                className='text-white hover:text-sky-600' 
                onClick={handleClik}>
                Logout
              </button>

            </Navbar.Collapse>
          <Navbar.Toggle />
        </div>

      </Navbar>
    )   
}
export default NavbarLP


