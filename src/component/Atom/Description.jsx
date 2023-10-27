import React from "react";

const Description = ({title}) => {
    return(
        <>
        <p 
            className="font-montserrat font-semibold text-md text-black">
            Badminton court description
        </p>
        <p 
            className="font-montserrat text-xs text-black">
            {title}
        </p>
        </>
    )
}
export default Description