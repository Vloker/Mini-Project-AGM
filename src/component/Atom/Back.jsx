import { ImCircleLeft } from "react-icons/im";
import { Link } from "react-router-dom";

const Back = ({ to }) => {

    return(
        <>
         <Link to={to} className="flex items-center gap-2 ">
            <ImCircleLeft className="w-5 h-5"/>
            <p className="font-montserrat font-semibold text-xl">Back</p>
        </Link>
        </>
    )
}
export default Back