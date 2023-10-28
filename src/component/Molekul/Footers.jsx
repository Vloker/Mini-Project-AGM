'use client';

import { Footer } from 'flowbite-react';
import {BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footers = () => {

  return (
    <Footer >
      <div className="w-full bg-black ">
        <div className="grid justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 mx-10 mt-5">
          <div className='flex items-center'>
            <Footer.Brand
              name="Logo"
              src="Logo.png"
              className='w-24 h-28'
            />
            <div>
                <p className='font-montserrat text-white font-bold text-4xl'>ShuttleSpot</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div className='flex flex-col'>
              <Footer.Title title="Follow us" className='text-white'/>
              <div className='flex gap-4'>
              <Footer.Icon
                href=""
                icon={BsInstagram}
              />
              <Footer.Icon
                href=""
                icon={BsTwitter}
              />
             <Footer.Icon
                href="https://github.com/Vloker/Mini-Project-AGM.git"
                icon={BsGithub}
              />
              </div>
            </div>

            <div>
              <Footer.Title title="Legal" className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

          </div>
        </div>
  
        <Footer.Divider />
        <div className="w-full  sm:mb-8 flex justify-center">
          <Footer.Copyright
            by="ShuttleSpot™"
            href="#"
            year={2022}
            className='text-white mx-24'
          />
        </div>
      </div>
    </Footer>
  )
}
export default Footers



