import NavbarLP from "../../component/Molekul/Navbar/NavbarLP";
import Footers from "../../component/Molekul/Footers";
import Back from "../../component/Atom/Back";

const Transaksi = () => {

    const handleClik = () => {
        alert("Terima kasih atas kepercayaan anda");
    }

    return(
        <>
        <section>
            <header>
                <NavbarLP />
            </header>
            <div className="container-sm container-md container-lg container-xl container-2xl">
                <div className="columns-1 mx-52 mt-8">
                    <div className="flex flex-col gap-4">
                    <Back to="/Booking"/>
                    <p className="font-montserrat text-3xl text-green font-semibold ps-5">Transaksi</p>
                    </div>
                </div>

                <div className="columns-1 flex justify-center mb-10 ">
                    <div className="grid grid-cols-2 max-w-4xl gap-10 flex items-center font-montserrat font-semibold text-md">
                        <div className="col-span-1 flex justify-center">
                            <button className="flex flex-col  items-center">
                                <img src="public/assets/Cash.jpg"
                                    className="w-96 h-96"
                                    onClick={handleClik}/>
                                <p>Cash</p>
                            </button>
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <button className="flex flex-col gap-2 items-center">
                                <img src="public/assets/Scan.jpg"
                                    className="w-96 h-96"
                                    onClick={handleClik}/>
                                <p>Scan Qris</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        <Footers />
        </section>
        </> 
    )
}
export default Transaksi