import React from "react";
import NavbarHL from "../component/Molekul/Navbar/NavbarHL";
import CardLP from "../component/Molekul/Card/CardLP";
import Footers from "../component/Molekul/Footers";

const HalamanUtama = () => {
    return (
       <>
        <section>
          <header>
              <div 
                className="container-sm container-md container-lg container-xl container-2xl bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('bgHalamanUtama.jpg')"}}
               >

                <div>
                <NavbarHL />
                </div>

                <div 
                    className="container-sm container-md container-lg container-xl container-2xl flex justify-center">
                    <div 
                        className="box-border w-2/3 my-20" >
                    <div 
                        className="columns mx-auto py-40 flex flex-col">
                        <p 
                            className='text-white font-montserrat text-3xl leading-10'>
                            Feel the Sensation of Playing<br />
                            <span className="font-bold text-6xl">
                            Badminton</span> in a <br />Comfortable Place.
                        </p>

                        <p 
                            className='text-white font-montserrat text-xl mt-10'>
                            Immediately Order Your Court and<br />Start Competing!
                        </p>

                            <div 
                                className="w-32 mt-10 ms-32">
                                <button 
                                className=" text-white font-semibold py-2 px-4 rounded-lg w-full bg-gradient-to-r from-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" 
                                onClick={() => window.location.href = "/Login"}>
                                Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                        
            <div 
                className="bg-white text-white rounded-t-full">
            .</div>

            </div>
          </header>

          <div 
            className="container-sm container-md container-lg container-xl container-2xl bg-white flex justify-center" 
            id="About"
            >
                <div className="box-content my-20">
                    <div className="columns flex items-center gap-44 w-full">
                        <div className="w-96">
                            <img src="Layer 2.png"/>
                        </div>
                        <div className="w-96 font-montserrat flex flex-col gap-4">
                            <p 
                                className="font-bold text-black text-3xl">
                                About Us
                            </p>
                            <p 
                                className="">ShuttleSpot is an online badminton court booking platform that makes it easy for you to book courts quickly.<br /> We offer access to a variety of high-quality court locations, badminton training and the best customer support.<br /> Join ShuttleSpot and enjoy a comfortable and affordable badminton experience.
                            </p>
                        </div>
                    </div>
                </div>
          </div>

          <div 
            className="container-sm container-md container-lg container-xl container-2xl bg-white my-20 flex justify-center" 
            id="TopCourt"
        >
            <div className="box-content">
                <div className="columns flex flex-col gap-8 w-full">
                    <div>
                        <p  
                            className="font-bold text-black text-3xl">
                            Top Court in ShuttleSpot
                        </p>
                    </div>

                    <div className="flex gap-20 justify-center">
                        <div>
                            <CardLP 
                                title="Rekreasi & Keluarga" 
                                title2="Lapangan bulutangkis rekreasi keluarga adalah lapangan yang dirancang untuk bermain bulutangkis dan bersenang-senang bersama dalam lingkungan yang santai."
                                src="Rekreasi-Keluarga.jpeg"
                            />
                        </div>

                        <div>
                            <CardLP 
                                title="Bulutangkis Berkualitas" 
                                title2="Lapangan bulutangkis berkualitas adalah lapangan olahraga yang memenuhi standar tinggi untuk permainan bulutangkis" 
                                src="Berkualitas.jpeg"
                            />
                        </div>

                        <div>
                            <CardLP 
                                title="Kompetitif & Turnamen"
                                title2="Lapangan bulutangkis kompetitif dan turnamen dirancang khusus untuk pertandingan bulutangkis yang memenuhi standar tinggi dan digunakan dalam kompetisi resmi dan turnamen." 
                                src="Kompetitif.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div>
            <Footers />
          </div>

        </section>
       </>
    )
}
export default HalamanUtama