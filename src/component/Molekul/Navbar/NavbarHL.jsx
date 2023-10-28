'use client';

import { Navbar } from 'flowbite-react';

const NavbarHL = () => {
    return (
      <Navbar fluid className='backdrop-blur-sm bg-white/20'>
        <Navbar.Brand >
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ShuttleSpot</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className='text-white'>Home</Navbar.Link>
          <Navbar.Link href="#About" className='text-white'>About</Navbar.Link>
          <Navbar.Link href="#TopCourt" className='text-white'>Top Court</Navbar.Link>
          <Navbar.Link href="/Login" className='text-white'>Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default NavbarHL

