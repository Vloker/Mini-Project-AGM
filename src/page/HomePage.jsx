
import NavbarLP from "../component/Molekul/Navbar/NavbarLP"
import CardHL from "../component/Molekul/Card/CardHL"
import Footers from "../component/Molekul/Footers"
import FormOpenAI from "../component/Molekul/OpenAI"
const Homepage = () => {
    return(
        <>
        <section>
                <header>
                    <div className="container-sm container-md container-lg container-xl container-2xl bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('public/Bg-HomePage.jpg')"}}>
                        <div>
                            <NavbarLP />
                        </div>
                        <div className="container-sm container-md container-lg flex justify-center">
                            <div className="box-content w-2/3 my-20 flex item-center">
                                <div className="columns mx-auto py-10 ">
                                <p className='text-white font-montserrat text-3xl leading-10'>Feel the Sensation of Playing<br /><span className="font-bold text-6xl">Badminton</span> in a <br />Comfortable Place.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-white rounded-t-full">.</div>
                    </div>
                </header>


            <div className="container-sm container-md container-lg container-xl container-2xl bg-white my-10 flex justify-center">
                    <div className="box-content max-w-4xl">
                        <div className="columns flex flex-col gap-8 w-full">
                          <div>
                            <p  
                                className="font-bold text-green text-3xl">
                                Badminton Court Available
                            </p>
                          </div>
                          <div className="flex gap-2 grid grid-cols-4 justify-center ">
                                <div className="col-span-1 items-center">
                                <CardHL 
                                    imgSrc="public/Pelatihan.jpeg"
                                    title="Rekreasi & Keluarga" 
                                    title2="4.5" 
                                    title3="Rp 40.000/jam"
                                />
                                </div>

                                <div className="col-span-1 items-center">
                                <CardHL 
                                    imgSrc="public/Berkualitas.jpeg"
                                    title="Bulutangkis Berkualitas" 
                                    title2="4.8" 
                                    title3="Rp 60.000/jam" 
                                />
                                </div>
                                
                                <div className="col-span-1 items-center">
                                <CardHL 
                                    imgSrc="public/Kompetitif.jpeg"
                                    title="Kompetitf & Turnamen" 
                                    title2="4.95" 
                                    title3="Rp 80.000/jam" 
                                />
                                </div>

                                <div className="col-span-1 items-center">
                                <CardHL 
                                    imgSrc="public/Pelatihan.jpeg"
                                    title="Pelatihan & Kursus" 
                                    title2="4.7" 
                                    title3="Rp 70.000/jam" 
                                />
                                </div>
                                
                          </div>

                          <div className="flex flex-col gap-5 mb-5">
                            <p  className="font-bold text-green text-3xl">Ask About Badminton With OpenAI</p>
                                
                            <FormOpenAI />

                          </div>

                        </div>
                    </div>
                </div>

            <Footers />

        </section>
        </>
    )
}
export default Homepage