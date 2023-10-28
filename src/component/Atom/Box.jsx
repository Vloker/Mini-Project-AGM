import { PiToiletDuotone } from "react-icons/pi";
import { LiaMosqueSolid } from "react-icons/lia";
import { PiChair } from "react-icons/pi";
import { GiTennisCourt } from "react-icons/gi";

const Box = ({toilet, lapangan, kursi, musollah}) => {
    return(
        <>
        <div className="flex gap-5 text-xs">
           <div className="py-5 px-8 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <PiToiletDuotone className="w-10 h-10"/>
                </div>
                    <p>{toilet}</p>
            </div>

            <div className="p-5 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <GiTennisCourt className="w-10 h-10"/>
                </div>
                <div>
                    <p>{lapangan}</p>
                </div>
            </div>

            <div className="py-5 px-8 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <PiChair className="w-10 h-10"/>
                </div>
                <div>
                    <p>{kursi}</p>
                </div>
            </div>

            <div className="p-5 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <LiaMosqueSolid className="w-10 h-10"/>
                </div>
                <div>
                    <p>{musollah}</p>
                </div>
            </div>
                                
        </div>
        </>
    )
}
export default Box