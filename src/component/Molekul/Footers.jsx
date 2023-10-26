'use client';

import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footers = () => {

  return (
    <Footer >
      <div className="w-full bg-black ">
        <div className="grid justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 mx-10 mt-5">
          <div className='flex items-center'>
            <Footer.Brand
              alt=""
              name="Logo"
              src="src/assets/Hue_Saturation 1.png"
              className='w-24 h-28'
            />
            <div>
                <p className='font-montserrat text-white font-bold text-4xl'>ShuttleSpot</p>
            </div>
          </div>

          

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 items-center">
            <div>
              <Footer.Title title="about" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="#">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between sm:mb-8 ">
          <Footer.Copyright
            by="Flowbite™"
            href="#"
            year={2022}
            className='text-white mx-24'
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mx-24 ">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}
export default Footers



