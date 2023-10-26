'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser} from 'react-icons/hi';

const SideBar = () => {
    
    return (
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              active
              icon={HiUser}
            >
              <button>
                Profile User
            </button>
            </Sidebar.Item>
            <Sidebar.Item
              href=""
              icon={HiArrowSmRight}
            >
              <button>
                Logout
              </button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    )
}
export default SideBar

