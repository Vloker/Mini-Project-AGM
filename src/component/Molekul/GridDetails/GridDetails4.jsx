import React from "react"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails4 = () => {
    return (
        <>
         <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-4xl gap-2">
                    <div className="col-span-2 flex items-center">
                            <img 
                                src="src/assets/download (1).jpeg" 
                                className="rounded-lg"
                                />
                        </div>
                        <div className=" col-span-1 flex items-center">
                            <div className="flex flex-col gap-2">
                                <div >
                                        <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                </div>
                                <div >
                                        <img src="src/assets/frame-harirak-HiR_pqdlXo0-unsplash.jpg" className="rounded-lg"/>
                                </div>
                            </div>
                         </div>

                         
                        <div className="col-span-2 flex flex-col gap-5">
                            <p 
                                className="font-montserrat font-bold text-2xl text-green">
                                Pelatihan & Kursus
                            </p>
                            
                            <Box />

                            <div 
                                className="flex flex-col gap-2">
                                <Description 
                                    title="Lapangan bulutangkis kompetitif & turnamen adalah lapangan khusus yang dirancang untuk mengadakan pertandingan bulutangkis dalam konteks kompetisi atau turnamen resmi. Lapangan ini memiliki ukuran dan standar tertentu yang telah ditentukan oleh badan pengatur olahraga bulutangkis. Biasanya, lapangan ini dilengkapi dengan peralatan seperti jaring, net post, dan garis-garis lapangan yang ditandai dengan presisi." 
                                />
                            </div>
                        </div>

                        <div className="col-span-1 flex justify-center items-center">
                            <CardDetail
                                hargaRange="Rp 70.000 - Rp 210.000"
                                harga1="1 Jam : Rp 70.000"
                                harga2="2 Jam : Rp 140.000"
                                harga3="3 Jam : Rp 210.000" />
                        </div>
                    </div>
               </div> 
        </>
    )
}
export default GridDetails4