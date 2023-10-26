import NavbarLP from "../../component/Molekul/Navbar/NavbarLP"
import FormBooking from "../../component/Molekul/Form/FormBooking"
import TableLB from "../../component/Atom/TabelLB"
import Footers from "../../component/Molekul/Footers"
import { useNavigate } from "react-router-dom"

const Booking = () => {

    const navigate = useNavigate()

    return (
        <>
            <section>
                    <div className="container-sm container-md container-lg container-xl container-2xl">
                        <header>
                            <NavbarLP />
                        </header>
                        <div className="container-sm container-md container-lg flex justify-center">
                            <div className="box-content w-2/3 mt-10 flex item-center gap-10">
                                <div className="flex flex-col space-y-4">
                                    <p className='text-green font-montserrat font-bold text-4xl leading-10'>Booking</p>
                                    <p className="font-montserrat text-xs">Langkah pertama menuju kebugaran dan kebahagiaan adalah membuat reservasi di lapangan bulutangkis. Tempat terbatas, jadi jangan tunda lagi, pesan sekarang!</p>
                                    <div>
                                        <FormBooking />
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <img src="src/assets/muktasim-azlan-rjWfNR_AC5g-unsplash (1).jpg"  className="rounded-lg"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-white rounded-t-full">.</div>
                    </div>

                <div className="container-sm container-md container-lg container-xl container-2xl flex justify-center mb-20 mt-10">
                    <div className="box-content w-2/3 my-10 flex item-center gap-10">
                        <div className="flex flex-col space-y-4">
                            <p className='text-green font-montserrat font-bold text-4xl leading-10'>Daftar Booking</p>
                            <div>
                                <TableLB />
                            </div>
                            <div className="relative">
                            <button className="bg-green text-white font-bold hover:bg-griy hover:text-green py-2 px-4 rounded absolute right-0" onClick={() => navigate("/Transaksi")}>Transaksi</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footers />

            </section>
        </>
    )
}
export default Booking