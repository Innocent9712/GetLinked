import liberty_logo from "../assets/icons/liberty_logo.svg"
import liberty_logo_2 from "../assets/icons/liberty_logo_2.svg"
import winwise_logo from "../assets/icons/winwise_logo.svg"
import paybox_logo from "../assets/icons/paybox_logo.svg"
import vizualplus_logo from "../assets/icons/vizualplus_logo.svg"
import wisper_logo from "../assets/icons/wisper_logo.svg"
const Partners = () => {
  return (
    <section className="mt-12 lg:mt-24 mb-12 flex justify-center pb-24" id="">
        <div className='w-[90%] max-w-6xl mx-auto flex flex-col items-center gap-12 lg:gap-24'>
            <div className='text-center flex flex-col gap-4'>
                <h2 className='font-clash-bold text-lg md:text-2xl lg:text-3xl'>Partners and Sponsors</h2>
                <p className='font-montserrat lg:w-[70%] mx-auto text-sm md:text-base'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>
            <div className='border border-custom-purple-three py-10 md:py-12 lg:py-20 w-full'>
                <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
                    <div className='flex items-center justify-evenly'>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={liberty_logo} alt="liberty_logo" />
                        </div>
                        <div className='w-[0.1rem] h-12 lg:h-32 bg-custom-purple-three'></div>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={liberty_logo_2} alt="liberty_logo" />
                        </div>
                        <div className='w-[0.1rem] h-12 lg:h-32 bg-custom-purple-three'></div>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={winwise_logo} alt="winwise_logo" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='basis-1/3'>
                            <div className='w-[60%] md:w-[70%] mx-auto h-[0.1rem] bg-custom-purple-three'></div>
                        </div>
                        <div className='basis-1/3'>
                            <div className='w-[60%] md:w-[70%] mx-auto h-[0.1rem] bg-custom-purple-three'></div>
                        </div>
                        <div className='basis-1/3'>
                            <div className='w-[60%] md:w-[70%] mx-auto h-[0.1rem] bg-custom-purple-three'></div>
                        </div>
                    </div>

                    <div className='flex items-center justify-evenly'>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={wisper_logo} alt="wisper_logo" />
                        </div>
                        <div className='w-[0.1rem] h-12 lg:h-32 bg-custom-purple-three'></div>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={paybox_logo} alt="paybox_logo" />
                        </div>
                        <div className='w-[0.1rem] h-12 lg:h-32 bg-custom-purple-three'></div>
                        <div className='basis-[15%] md:basis-[25%] flex justify-center'>
                            <img src={vizualplus_logo} alt="vizualplus_logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners