import FormLogin from "../component/Molekul/Form/FormLogin"

const Login = () => {
    return(
        <>
        <section>
            <div className="container-xl container-md container-lg container-xl container-2xl bg-green">
                <div className="box-content flex items-center">
                    <div className="columns mx-auto w-full flex justify-center">
                        <div className="w-96 font-montserrat bg-white px-10 py-5 rounded-xl m-40">
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Login