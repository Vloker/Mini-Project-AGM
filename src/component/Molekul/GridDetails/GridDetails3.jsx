import React from "react"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails3 = () => {
    return (
        <>
         <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-4xl gap-2">
                        <div className="col-span-2 flex items-center">
                            <img 
                                src="src/assets/Detroit Photos - Detroit Photography.jpeg" 
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
                                Kompetitif & Turnamen
                            </p>
                            
                            <Box />

                            <div 
                                className="flex flex-col gap-2">
                                <Description title="Lapangan bulutangkis kompetitif & turnamen adalah lapangan khusus yang dirancang untuk mengadakan pertandingan bulutangkis dalam konteks kompetisi atau turnamen resmi. Lapangan ini memiliki ukuran dan standar tertentu yang telah ditentukan oleh badan pengatur olahraga bulutangkis. Biasanya, lapangan ini dilengkapi dengan peralatan seperti jaring, net post, dan garis-garis lapangan yang ditandai dengan presisi." 
                            />
                            </div>
                        </div>

                        <div className="col-span-1 flex justify-center items-center">
                            <CardDetail
                                hargaRange="Rp 85.000 - Rp 255.000"
                                harga1="1 Jam : Rp 85.000"
                                harga2="2 Jam : Rp 170.000"
                                harga3="3 Jam : Rp 255.000" />
                        </div>
                    </div>
               </div> 
        </>
    )
}
export default GridDetails3