import FormRegis from "../component/Molekul/Form/FormRegis"

const Register = () => {
    return(
        <>
        <section>
            <div className="container-xl bg-green">
                <div className="box-content flex items-center mx-36">
                    <div className="columns mx-auto w-full flex justify-center">
                        <div className="w-96 font-montserrat bg-white px-10 py-5 rounded-xl m-20">
                            <FormRegis/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Register