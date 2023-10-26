import React from "react"
import NavbarLP from "../../component/Molekul/Navbar/NavbarLP"
import Back from "../../component/Atom/Back"
import Box from "../../component/Atom/Box"
import Footers from "../../component/Molekul/Footers"
import CardDetail from "../../component/Molekul/Card/CardDetail"
import { useNavigate } from "react-router-dom"
const Details = () => {

    const navigate = useNavigate();

    return(
        <>
         <section>
            <header>
               <NavbarLP />
            </header>
            <div className="container-sm container-md container-lg container-xl mb-8">

                <div className="columns-1 flex justify-center mt-8">
                    <div className="grid grid-cols-2 max-w-5xl gap-2">
                        <div className="box-content col-span-1 flex flex-col gap-2">

                            <Back onclik={() => navigate("/HomePage")} />

                            <img src="src/assets/Badminton Doubles Strategy - From Basic Rules to Winning the Match.jpeg" className="rounded-lg"/>
                        </div>
                        <div className="box-content col-span-1 flex gap-2 grid grid-cols-2 pt-9">
                           <div className="col-span-1 flex flex-col gap-2 w-full">
                                <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                           </div>
                           <div className="col-span-1 flex flex-col gap-2">
                                <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                           </div>
                        </div>
                    </div>
               </div>

               <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-5xl gap-2">
                        <div className="col-span-2 flex flex-col gap-5">
                            <p className="font-montserrat font-bold text-2xl text-green">Rekreasi & Keluarga</p>
                            
                            <Box />

                            <div className="flex flex-col gap-2">
                            <p className="font-montserrat font-semibold text-md text-black">Badminton court description</p>
                            <p className="font-montserrat text-xs text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="col-span-1 flex justify-center">
                            <CardDetail />
                        </div>
                    </div>
                </div>
            </div>

            <Footers />

         </section>
        </>
    )
}
export default Details