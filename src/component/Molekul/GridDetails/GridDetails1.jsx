import React from "react"
import Back from "../../Atom/Back"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails1 = () => {

    return(
        <>
         <section>
            <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-3xl flex flex-col gap-5">
                        <div className="col-span-3">
                            <Back to="/HomePage"/>
                        </div>
                        <div className="col-span-3 flex justify-center">
                            <img 
                                src="Rekreasi-Keluarga.jpeg" 
                                className="w-full h-full" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <p 
                                className="font-montserrat font-bold text-xl text-green">
                                Rekreasi & Keluarga
                            </p>

                            <Box
                                toilet="2 toilet"
                                lapangan="1 lapangan"
                                kursi="2 kursi"
                                musollah="1 musollah"/>

                            <Description 
                                title="Lapangan bulu tangkis dengan tema Rekreasi & Keluarga adalah fasilitas olahraga yang dirancang untuk memberikan lingkungan yang ramah keluarga dan santai di mana individu dan keluarga dapat menikmati permainan bulu tangkis sambil menjalin ikatan sosial."/>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <CardDetail 
                                hargaRange="Rp. 40.000 - Rp. 120.000" 
                                harga1="1 jam : Rp. 40.000"
                                harga2="2 jam : Rp. 80.000"
                                harga3="3 jam : Rp. 120.000"/>
                        </div>
                    </div>
               </div> 
        </section>
        </>
    )
}
export default GridDetails1