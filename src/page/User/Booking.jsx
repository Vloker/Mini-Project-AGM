import NavbarLP from "../../component/Molekul/Navbar/NavbarLP"
import FormBooking from "../../component/Molekul/Form/FormBooking"
import TableLB from "../../component/Molekul/Tabel/TabelLB"
import Footers from "../../component/Molekul/Footers"
import { Link } from "react-router-dom"

const Booking = () => {
    return (
        <>
            <section>
                <header>
                    <NavbarLP />
                </header>

                <div 
                    className="container-sm container-md container-lg container-xl container-2xl ">
                <div className="columns-1 flex justify-center my-8">
                    <div className="grid grid-cols-2 max-w-5xl gap-5">

                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <p 
                                    className='text-green font-montserrat font-bold text-4xl leading-10'>
                                    Booking
                                </p>
                                <p 
                                    className="font-montserrat text-xs">
                                    Langkah pertama menuju kebugaran dan kebahagiaan adalah membuat reservasi di lapangan bulutangkis. Tempat terbatas, jadi jangan tunda lagi, pesan sekarang!
                                </p>

                                <FormBooking />

                            </div>
                        </div>

                        <div className="col-span-1 flex items-center">
                            <img 
                                src="public/Booking.jpg"  
                                className="rounded-lg"/>
                        </div>

                        <div className="col-span-2 flex flex-col gap-4 mt-5">
                            <p 
                                className='text-green font-montserrat font-bold text-4xl leading-10'>
                                Daftar Booking
                            </p>

                            <div>
                                <TableLB />
                            </div>

                                <Link 
                                    to="/Transaksi" 
                                    className="bg-green text-white text-center font-bold hover:bg-griy hover:text-green py-2 px-4 rounded">
                                    Transaksi
                                </Link>

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