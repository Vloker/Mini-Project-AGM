import { PiToiletDuotone } from "react-icons/pi";
import { LiaMosqueSolid } from "react-icons/lia";
import { PiChair } from "react-icons/pi";
import { GiTennisCourt } from "react-icons/gi";

const Box = () => {
    return(
        <>
        <div className="flex gap-5">
           <div className="py-5 px-8 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <PiToiletDuotone className="w-10 h-10"/>
                </div>
                <div>
                    <p>2 toilet</p>
                </div>
            </div>

            <div className="py-5 px-8 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <GiTennisCourt className="w-10 h-10"/>
                </div>
                <div>
                    <p>1 court</p>
                </div>
            </div>

            <div className="py-5 px-8 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <PiChair className="w-10 h-10"/>
                </div>
                <div>
                    <p>4 chair</p>
                </div>
            </div>

            <div className="py-5 px-7 rounded-md bg-griy flex flex-col font-montserrat">
                <div className="flex justify-center">
                    <LiaMosqueSolid className="w-10 h-10"/>
                </div>
                <div>
                    <p>Musollah</p>
                </div>
            </div>
                                
        </div>
        </>
    )
}
export default Box