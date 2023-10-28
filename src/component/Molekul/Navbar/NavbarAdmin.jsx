'use client';
import { Navbar} from 'flowbite-react';

const NavbarAdmin = () => {
    
    return (
      <Navbar fluid rounded className='bg-green backdrop-blur-sm'>
        
        <Navbar.Brand >
        <img src="Logo.png" className="mr-1 ms-2 h-6 sm:h-9"/>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">ShuttleSpot</span>
        </Navbar.Brand>
      </Navbar>
    )
    
}
export default NavbarAdmin


