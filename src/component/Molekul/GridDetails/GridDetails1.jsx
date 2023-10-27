import React from "react"
import Back from "../../Atom/Back"
import Box from "../../Atom/Box"
import CardDetail from "../Card/CardDetail"
import Description from "../../Atom/Description"

const GridDetails1 = () => {
    return (
        <>
         <div className="columns-1 flex justify-center mt-4">
                    <div className="grid grid-cols-3 max-w-4xl gap-2">
                        <div className="col-span-3">
                            <Back to="/HomePage"/>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <img 
                                src="src/assets/Badminton Doubles Strategy - From Basic Rules to Winning the Match.jpeg" 
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
                            <p className="font-montserrat font-bold text-2xl text-green">Rekreasi & Keluarga</p>
                            
                            <Box />

                            <div className="flex flex-col gap-2">
                                <Description title="Lapangan bulu tangkis rekreasi dan keluarga adalah fasilitas olahraga yang dirancang khusus untuk menyediakan ruang bagi individu dan keluarga untuk bermain bulu tangkis dengan suasana yang santai dan ramah keluarga." />
                            </div>
                        </div>

                        <div className="col-span-1 flex justify-center">
                            <CardDetail
                                hargaRange="Rp 40.000 - Rp 120.000"
                                harga1="1 Jam : Rp 40.000"
                                harga2="2 Jam : Rp 80.000"
                                harga3="3 Jam : Rp 120.000"
                            />
                        </div>
                    </div>
               </div> 
        </>
    )
}
export default GridDetails1