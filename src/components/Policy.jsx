import check_item from "../assets/icons/check_item.svg"
import security from "../assets/icons/security.svg"
import lock_man from "../assets/icons/lock_man.svg"
import star_purple from "../assets/icons/star_purple.svg"
import star_white from "../assets/icons/star_white.svg"
import star_gray from "../assets/icons/star_gray.svg"
import StarBlink from "./Star2";

const Policy = () => {
  return (
    <section className="relative mt-12 lg:mt-48 mb-12 lg:mb-32 flex justify-center" id="">
        <StarBlink image={star_gray} styles={"w-2 left-[70%] top-[-1%] md:w-3 md:top-6 lg:w-5 lg:left-[30%] lg:top-[-3%]"} />
        <StarBlink image={star_purple} styles={"w-3 left-[75%] top-[13%] md:w-4 md:top-[10%] lg:w-5 lg:left-[50%] lg:top-[10%]"} />
        <StarBlink image={star_purple} styles={"w-3 left-[5%] top-[50%] md:w-4 md:top-[30%] lg:w-6 lg:top-[60%] "} />
        <StarBlink image={star_purple} styles={"w-3 left-[6%] top-[70%] md:w-4 md:top-[60%] lg:left-[65%] lg:w-6"} />
        <StarBlink image={star_white} styles={"w-2 left-[76%] top-[68%] md:w-4 md:top-[55%] md:left-[70%] lg:top-[5%] lg:left-[80%]"} />
        <StarBlink image={star_white} styles={"w-2 left-[20%] top-[95%] md:w-3 md:top-[90%] lg:top-[85%] lg:left-[60%]"} />
        <StarBlink image={star_gray} styles={"w-2 left-[80%] top-[99%] md:w-4 lg:w-8 lg:left-[90%]"} />

        <div className='w-[80%] max-w-7xl mx-auto flex flex-col lg:flex-row justify-left lg:justify-between gap-48 lg:gap-0'>
            <div className='font-montserrat lg:basis-[50%] text-center lg:text-left'>
                <h3 className="font-clash-bold mb-3 md:text-lg lg:text-2xl">Privacy Policy and <br/><span className='text-custom-purple-three'>Terms</span></h3>
                <p className='text-sm mb:text-base mb-8 opacity-75'>Last updated on September 12, 2023</p>
                <p className='text-sm mb:text-base mb-12 lg:w-[70%]'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant.</p>
                <div className='border rounded-md border-custom-purple-three p-8'>
                    <p className='text-xs mb:text-sm mb-12 leading-6 lg:text-base lg:leading-7'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                    <h4 className="font-clash-bold mb-3 text-custom-purple-three text-left">Licensing Policy</h4>
                    <p className='text-xs mb:text-sm mb-12 text-left lg:text-base'>Here are terms of our Standard License:</p>
                    <ul className='flex flex-col gap-4 text-left'>
                        <li className='flex items-start gap-2'>
                            <img src={check_item} alt="check item" className='mt-2' />
                            <p className='text-xs mb:text-sm lg:text-base'>The Standard License grants you a non-exclusive right to navigate and register for our event.</p>
                        </li>
                        <li className='flex items-start gap-2'>
                            <img src={check_item} alt="check item" className='mt-2' />
                            <p className='text-xs mb:text-sm lg:text-base'>You are licensed to use the item available at any free source sites, for your project developement.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative lg:basis-[45%] flex items-center lg:justify-end">
                <img src={security} alt="security icon" className="absolute -top-32 lg:-top-18 left-6 lg:left-36 w-[90%] lg:w-[70%]" />
                <img src={lock_man} alt="man with the keys" className="relative w-[90%] lg:w-[85%]" />
            </div>
        </div>
    </section>
  )
}

export default Policy