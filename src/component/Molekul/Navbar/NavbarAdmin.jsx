'use client';
import { Navbar} from 'flowbite-react';

const NavbarAdmin = () => {
    
    return (
      <Navbar fluid rounded className='bg-green backdrop-blur-sm'>
        
        <Navbar.Brand >
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ShuttleSpot</span>
        </Navbar.Brand>
      </Navbar>
    )
    
}
export default NavbarAdmin


