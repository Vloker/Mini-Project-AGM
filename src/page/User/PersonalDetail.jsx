import React, {useEffect} from "react"
import SideBar from "../../component/Molekul/Sidebar/SideBar";
import { Avatar } from "flowbite-react";
import Back from "../../component/Atom/Back";
import { useNavigate } from "react-router-dom";


const PersonalDetail = () => {

    const navigate = useNavigate();

    return(
        <>
         <section>
            <div className="container-xl bg-green">
                <div className="grid grid-cols-5">
                    <div className="col-span-1">
                        <SideBar />
                    </div>
                <div className="col-span-4 flex flex-col gap-5 my-16 ps-5">

                   <Back onclik={() => navigate("/HomePage")} />
                   
                    <p className="text-white font-montserrat text-2xl font-bold">Personal Details</p>
                    
                    <div className="grid grid-cols-3 mb-20 flex gap-3">
                        <div className="justify-start">
                            <Avatar rounded size="xl"/>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Username</p>
                                <p className="text-white font-montserrat text-xl">Username</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Gender</p>
                                <p className="text-white font-montserrat text-xl">Gender</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Phone Number</p>
                                <p className="text-white font-montserrat text-xl">Phone Number</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Email</p>
                                <p className="text-white font-montserrat text-xl">Email</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Alamat</p>
                                <p className="text-white font-montserrat text-xl">Alamat</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Kota</p>
                                <p className="text-white font-montserrat text-xl">Kota</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-black font-montserrat text-sm">Negara</p>
                                <p className="text-white font-montserrat text-xl">Negara</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default PersonalDetail