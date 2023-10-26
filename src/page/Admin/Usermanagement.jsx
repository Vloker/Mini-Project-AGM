import React from "react";
import SidebarAdmin from "../../component/Molekul/Sidebar/SidebarAdmin";
import { BiSearch } from "react-icons/bi";
import TableAdmin from "../../component/Atom/TableAdmin";
const Usermanagement = () => {

    return (
        <>
        <div className="container-sm container-md container-lg container-xl container-2xl">
            <div className="grid grid-cols-5 space-x-10">
                <div className="col-span-1 rounded-lg">
                    <SidebarAdmin />
                </div>
                <div className="col-span-4 flex justify-center">
                    <div className="flex flex-col">
                    <div className="mt-10">
                        <p className="text-black font-montserrat font-bold text-2xl">Costumer Management</p>
                    </div>

                    <div className="relative mt-5 ">
                        <div className="absolute inset-y-0 left-0 flex items-center px-3 ">
                            <BiSearch className="w-5 h-5" />
                        </div>
                        <input type="text" placeholder="Search" className="py-3 pl-10 w-2/4 rounded-xl"/>
                    </div>

                    <div className="mt-5 mb-10 pe-5">
                        <TableAdmin />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Usermanagement