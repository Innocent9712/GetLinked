import check_item from "../assets/icons/check_item.svg"
import security from "../assets/icons/security.svg"
import lock_man from "../assets/icons/lock_man.svg"

const Policy = () => {
  return (
    <section className="mt-12 lg:mt-48 mb-12 flex justify-center pb-24" id="">
        <div className='w-[80%] max-w-6xl mx-auto flex flex-col lg:flex-row justify-left lg:justify-between gap-48 lg:gap-0'>
            <div className='font-montserrat lg:basis-[50%] text-center lg:text-left'>
                <h3 className="font-clash-bold mb-3 md:text-lg lg:text-2xl">Privacy Policy and <br/><span className='text-custom-purple-three'>Terms</span></h3>
                <p className='text-sm mb:text-base mb-8'>Last updated on September 12, 2023</p>
                <p className='text-sm mb:text-base mb-12'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant.</p>
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
            <div className="relative lg:basis-[45%] flex items-center">
                <img src={security} alt="security icon" className="absolute -top-32 lg:-top-24 left-6 lg:left-20 lg:w-[70%]" />
                <img src={lock_man} alt="man with the keys" className="relative lg:w-[90%]" />
            </div>
        </div>
    </section>
  )
}

export default Policy