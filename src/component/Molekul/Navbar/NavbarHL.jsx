'use client';

import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NavbarHL = () => {

  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn')
    if (loggedInStatus === 'true') {
      setIsLogin(true);
    }
  }, [])

  const handleClick = () => {
    if (isLogin) {

      localStorage.setItem('isLoggedIn', 'false');
      setIsLogin(true);
      navigate('/HomePage');
    } else {
      
      localStorage.setItem('isLoggedIn', 'true');
      setIsLogin(false);
      navigate('/Login');
    }
  };

    return (
      <Navbar fluid className='backdrop-blur-sm bg-white/20'>
        <Navbar.Brand >
          <img src="Logo.png" className="mr-1 ms-2 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">ShuttleSpot</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className='text-white'>Home</Navbar.Link>
          <Navbar.Link href="#About" className='text-white'>About</Navbar.Link>
          <Navbar.Link href="#TopCourt" className='text-white'>Top Court</Navbar.Link>
          <button className='text-white hover:text-sky-600' onClick={handleClick}>Login</button>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default NavbarHL

