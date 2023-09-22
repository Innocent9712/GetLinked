import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-custom-purple-four bg-blend-multiply bg-opacity-80 py-16 font-montserrat text-sm'>
        <div className='w-[80%] max-w-[90rem] mx-auto'>
            <div className='flex flex-wrap gap-y-16 mb-24 justify-between'>
                <div className='basis-full lg:basis-[50%]'>
                    <h3 className="font-clash-bold text-white text-xl md:text-2xl lg:text-3xl">get<span className="text-custom-purple-three">linked</span></h3>
                    <p className='leading-6 mt-2'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.</p>
                    <p className='mt-10'>Terms of Use <span className="w-[0.1rem] inline-block mx-4 h-3 bg-custom-purple-three"></span> Privacy Policy</p>
                </div>
                <div className="basis-full md:basis-[50%] lg:basis-[20%]">
                    <h6 className='font-clash-bold text-custom-purple-three'>Useful Links</h6>
                    <ul className="flex flex-col gap-4 mt-4">
                        <li className="hover:cursor-pointer focus:cursor-pointer" >
                            <Link to={"overview"} smooth={true} duration={500} className={"text-white"} >
                                Overview
                            </Link>
                        </li>
                        <li className="hover:cursor-pointer focus:cursor-pointer" >
                            <Link to={"timeline"} smooth={true} duration={500} className={"text-white"} >
                                Timeline
                            </Link>
                        </li>
                        <li className="hover:cursor-pointer focus:cursor-pointer" >
                            <Link to={"faqs"} smooth={true} duration={500} className={"text-white"} >
                                FAQs
                            </Link>
                        </li>
                        <li className="hover:cursor-pointer focus:cursor-pointer" >
                            Register
                        </li>
                    </ul>
                    <div className='mt-4 flex items-center gap-4'>
                        <p className='text-custom-purple-three'>Follow us</p>
                        <ul className='flex gap-6 text-base lg:text-xl'>
                            <li className="hover:cursor-pointer focus:cursor-pointer" >
                                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li className="hover:cursor-pointer focus:cursor-pointer" >
                                <a href="https://twitter.com/brainmode" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-twitter-x-line"></i>
                                </a>
                            </li>
                            <li className="hover:cursor-pointer focus:cursor-pointer" >
                                <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li className="hover:cursor-pointer focus:cursor-pointer" >
                                <a href="https://www.linkedin.com/in/iaminnocent99" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="basis-full md:basis-[50%] lg:basis-[20%]">
                    <h6 className='font-clash-bold text-custom-purple-three'>Contact Us</h6>
                    <ul className='flex flex-col gap-8 w-48 mt-4'>
                        <li className='flex gap-3 items-center'>
                            <i className="ri-phone-fill"></i>
                            <p>+234 679 81819</p>
                        </li>
                        <li className='flex gap-3 items-start'>
                            <i className="ri-map-pin-2-fill"></i>
                            <p>27,Alara Street Yaba 100012 Lagos State.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='font-bold text-center'>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer