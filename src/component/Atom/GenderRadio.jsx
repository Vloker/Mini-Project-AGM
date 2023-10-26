import React from "react"

const GenderRadio = ({value,name,checked,title,onChange}) => {

    return (
        <>
            <label className="flex gap-1 items-center">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}/>
                    {title}
                </label>
        </>
    )
}
export default GenderRadio