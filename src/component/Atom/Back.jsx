import { ImCircleLeft } from "react-icons/im";

const Back = ({onclik}) => {

    return(
        <>
         <button onClick={onclik} className="flex items-center gap-2">
            <ImCircleLeft className="w-5 h-5"/>
            <p className="font-montserrat font-semibold text-xl">Back</p>
         </button>
        </>
    )
}
export default Back