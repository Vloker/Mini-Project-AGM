'use client';
import { Dropdown, Navbar, Avatar} from 'flowbite-react';

const NavbarLP = () => {
    
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
            label={<Avatar rounded />}
          >

            <Dropdown.Header className='text-center'>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>

            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
    )
    
}
export default NavbarLP


