import React from "react"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails1 = () => {

    return(
        <>
         <section>
            <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-3xl flex flex-col gap-5">
                        <div className="col-span-3 flex justify-center">
                            <img 
                                src="src/assets/Kompetitif.jpeg" 
                                className="w-full h-full" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <p 
                                className="font-montserrat font-bold text-xl text-green">
                                Kompetitif & Turnamen
                            </p>

                            <Box
                                toilet="2 toilet"
                                lapangan="4 lapangan"
                                kursi="10 kursi"
                                musollah="1 musollah"/>

                            <Description 
                                title="Lapangan bulu tangkis dengan tema Kompetitif & Turnamen adalah fasilitas olahraga yang secara khusus dirancang untuk mendukung kompetisi bulu tangkis tingkat tinggi dan menyelenggarakan turnamen"/>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <CardDetail 
                                hargaRange="Rp. 80.000 - Rp. 240.000" 
                                harga1="1 jam : Rp. 80.000"
                                harga2="2 jam : Rp. 160.000"
                                harga3="3 jam : Rp. 240.000"/>
                        </div>
                    </div>
               </div> 
        </section>
        </>
    )
}
export default GridDetails1