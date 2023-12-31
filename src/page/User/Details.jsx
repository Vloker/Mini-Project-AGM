import React from "react"
import NavbarLP from "../../component/Molekul/Navbar/NavbarLP"
import Footers from "../../component/Molekul/Footers"
import GridDetails1 from "../../component/Molekul/GridDetails/GridDetails1"
import GridDetails2 from "../../component/Molekul/GridDetails/GridDetails2"
import GridDetails3 from "../../component/Molekul/GridDetails/GridDetails3"
import GridDetails4 from "../../component/Molekul/GridDetails/GridDetails4"

const Details = () => {

    return(
        <>
         <section>
            <header>
               <NavbarLP />
            </header>
            <div className="container-sm container-md container-lg container-xl mb-8">
                <div className="flex flex-col gap-8">
                    <GridDetails1 />
                    <GridDetails2 />
                    <GridDetails3 />
                    <GridDetails4 />
                </div>
            </div>
        <Footers />
    </section>
        </>
    )
}
export default Details