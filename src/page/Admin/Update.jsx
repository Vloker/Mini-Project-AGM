import React from "react"
import FormEdit from "../../component/Molekul/Form/FormEdit"

const Edit = () => {

    return (
        <>
        <section>
        <div className="container-xl bg-green">
            <div className="box-content flex items-center mx-36">
                <div className="columns mx-auto w-full flex justify-center">
                    <div className="w-96 font-montserrat bg-white px-10 py-5 rounded-xl m-20">
                        <FormEdit/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Edit


