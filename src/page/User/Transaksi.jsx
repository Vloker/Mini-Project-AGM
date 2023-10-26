import NavbarLP from "../../component/Molekul/Navbar/NavbarLP";
import { Button } from "flowbite-react"
import Footers from "../../component/Molekul/Footers";
import Back from "../../component/Atom/Back";
import { useNavigate } from "react-router-dom";
import TabelTransaksi from "../../component/Atom/TabelTransaksi";

const Transaksi = () => {

    const navigate = useNavigate();

    return(
        <>
          <section>
                <header>
                        <NavbarLP />
                </header>
                        <div className="container-sm container-md container-lg flex justify-center bg-griy">
                            <div className="box-content w-2/3 my-10 flex item-center gap-5 flex-col">
                            
                            <Back onclik={() => navigate("/Booking")}/>

                                <div className="flex flex-col space-y-4">
                                    <p className='text-green font-montserrat font-bold text-4xl leading-10'>Transaction</p>
                                    <div className="mx-20 p-5 flex flex-col gap-5 bg-white rounded-xl">
                                        <p className="font-montserrat text-xl font-bold">Booking Summary</p>
                                        <div className="flex justify-center ">
                                            <TabelTransaksi />
                                        </div>
                                        <Button className="bg-green text-white font-montserrat rounded-lg">Transaksi Lapangan</Button>
                                 </div>
                             </div>
                        </div>
                    </div>
            </section>
            
            <Footers />
        </> 
    )
}
export default Transaksi