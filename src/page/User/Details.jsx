import React from "react"
import NavbarLP from "../../component/Molekul/Navbar/NavbarLP"
import Footers from "../../component/Molekul/Footers"
import GridDetails1 from "../../component/Molekul/GridDetails/GridDetails1"
import GridDetails2 from "../../component/Molekul/GridDetails/GridDetails2"
const Details = () => {

    return(
        <>
         <section>
            <header>
               <NavbarLP />
            </header>
            <div className="container-sm container-md container-lg container-xl mb-8">
                <div>
                    <GridDetails1 />
                </div>
                <div className="mt-20">
                    <GridDetails2 />
                </div>
                <div className="mt-20">
                    <GridDetails2 />
                </div>
                <div className="mt-20">
                    <GridDetails2 />
                </div>
            </div>
        <Footers />
    </section>
        </>
    )
}
export default Details