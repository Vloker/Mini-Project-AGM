import React from "react"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails3 = () => {
    return (
        <>
         <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-4xl gap-2">
                        <div className="col-span-2 flex flex-col">
                            <img 
                                src="src/assets/Badminton Doubles Strategy - From Basic Rules to Winning the Match.jpeg" 
                                className="rounded-lg"
                                />
                        </div>
                        <div className=" col-span-1 flex flex-col items-center gap-2">
                                <div >
                                        <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                </div>
                                <div >
                                        <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                </div>
                         </div>

                         
                        <div className="col-span-2 flex flex-col gap-5">
                            <p className="font-montserrat font-bold text-2xl text-green">Bulutangkis Berkualitas</p>
                            
                            <Box />

                            <div className="flex flex-col gap-2">
                                <Description title="Lapangan bulu tangkis berkualitas dirancang untuk memenuhi kebutuhan pemain yang serius dan penggemar olahraga. Mereka menawarkan lingkungan yang ideal untuk latihan dan persaingan tingkat tinggi dalam bulu tangkis." />
                            </div>
                        </div>

                        <div className="col-span-1 flex justify-center">
                            <CardDetail
                                hargaRange="Rp 60.000 - Rp 180.000"
                                harga1="1 Jam : Rp 60.000"
                                harga2="2 Jam : Rp 120.000"
                                harga3="3 Jam : Rp 180.000" />
                        </div>
                    </div>
               </div> 
        </>
    )
}
export default GridDetails3