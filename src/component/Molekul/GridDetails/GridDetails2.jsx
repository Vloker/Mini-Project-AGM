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
                                src="public/assets/Berkualitas.jpeg" 
                                className="w-full h-full" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <p 
                                className="font-montserrat font-bold text-xl text-green">
                                Bulutangkis Berkualitas
                            </p>

                            <Box
                                toilet="2 toilet"
                                lapangan="2 lapangan"
                                kursi="4 kursi"
                                musollah="1 musollah"/>

                            <Description 
                                title="Lapangan bulu tangkis dengan tema Bulu Tangkis Berkualitas adalah fasilitas olahraga yang didedikasikan untuk menyediakan lingkungan yang memungkinkan pemain bulu tangkis berlatih dan bersaing di tingkat yang lebih tinggi."/>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <CardDetail 
                                hargaRange="Rp. 60.000 - Rp. 180.000" 
                                harga1="1 jam : Rp. 60.000"
                                harga2="2 jam : Rp. 120.000"
                                harga3="3 jam : Rp. 180.000"/>
                        </div>
                    </div>
               </div> 
        </section>
        </>
    )
}
export default GridDetails1