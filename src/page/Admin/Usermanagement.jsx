import React from "react";
import SidebarAdmin from "../../component/Molekul/Navbar/SidebarAdmin";
import TableAdmin from "../../component/Molekul/Tabel/TableAdmin";
import NavbarAdmin from "../../component/Molekul/Navbar/NavbarAdmin";
const Usermanagement = () => {

    return (
        <>
        <section>
            <header>
                <NavbarAdmin />
            </header>

            <div className="container-sm container-md container-lg container-xl container-2xl">
                <div className="columns-1 flex gap-2">
                        <SidebarAdmin />
                        <TableAdmin />
                </div>
              
            </div>
        </section>
        </>
    );
}
export default Usermanagement