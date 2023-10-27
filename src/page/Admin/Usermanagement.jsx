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
                <div className="col-span-4 ">
                    <div className="flex flex-col">
                    <div className="mt-10">
                        <p className="text-black font-montserrat font-bold text-2xl">Costumer Management</p>
                    </div>
                        <TableAdmin />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Usermanagement