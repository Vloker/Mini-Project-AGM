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
                                src="Pelatihan.jpeg" 
                                className="w-full h-full" />
                        </div>
                        <div className="flex flex-col col-span-2 gap-2">
                            <p 
                                className="font-montserrat font-bold text-xl text-green">
                                Pelatihan & Kursus
                            </p>

                            <Box
                                toilet="2 toilet"
                                lapangan="4 lapangan"
                                kursi="4 kursi"
                                musollah="1 musollah"/>

                            <Description 
                                title="Lapangan bulu tangkis dengan tema Pelatihan Kursus adalah fasilitas olahraga yang didedikasikan untuk memberikan lingkungan yang ideal bagi para pemain bulu tangkis, baik pemula maupun berpengalaman, untuk mengembangkan keterampilan mereka melalui pelatihan dan kursus yang diselenggarakan"/>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <CardDetail 
                                hargaRange="Rp. 70.000 - Rp. 210.000" 
                                harga1="1 jam : Rp. 70.000"
                                harga2="2 jam : Rp. 140.000"
                                harga3="3 jam : Rp. 210.000"/>
                        </div>
                    </div>
               </div> 
        </section>
        </>
    )
}
export default GridDetails1