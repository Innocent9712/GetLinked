import MediaQuery from "react-responsive"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import hamburger from "../assets/icons/hamburger.svg"
import cancel from "../assets/icons/cancel.svg"
import {motion} from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { Link as ScrollLink, scroller } from 'react-scroll';

const Header = () => {

  const [isHidden, setIsHidden] = useState(true);
  const mobileNavRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate()

  const variants = {
    hidden: {
      y: -1000, // Move the div off-screen
      opacity: 0, // Hide the div
      transition: {
        duration: 0.5, // Adjust the duration
      },
    },
    visible: {
      y: 0, // Bring the div to its original position
      opacity: 1, // Show the div
      transition: {
        duration: 0.5, // Adjust the duration
      },
    },
  };

  const handleLinkClicked = (section) => {
    // check if location is /
    if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
            scroller.scrollTo(section, {smooth: true})    
        }, 1000);
    }
  }

//   const toggleAnimation = () => {
//     setIsHidden(!isHidden);
//   };

  const handleClickOutside = useCallback((event) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
    // if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        if (!isHidden) setIsHidden(true)
    }
  }, [isHidden])

  useEffect(() => {
    // Bind the event listener
        document.addEventListener('click', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('click', handleClickOutside);
        };
   }, [handleClickOutside]);

  

  return (
    <header
        className="pt-12 relative border-b border-white pb-6 border-opacity-25"
    >
        <div className="flex justify-between max-w-[90rem] w-[75%] md:w-[85%] mx-auto items-center">
            <Link to={"/"}>
                <div tabIndex={1} className="hover:cursor-pointer">
                    <h1 className="font-clash-bold text-white text-base md:text-xl lg:text-3xl">get<span className="text-custom-purple-three">linked</span></h1>
                </div>
            </Link>
            <div className="md:basis-[70%] md:flex md:justify-end items-center md:gap-8 lg:gap-[12rem]">
                <MediaQuery minWidth={768}>
                    <ul className="font-montserrat flex gap-6 lg:gap-12 text-sm">
                        <li className="hover:cursor-pointer focus:cursor-pointer" tabIndex={1}>
                            <ScrollLink to={"timeline"} smooth={true} duration={500} className={"text-white"} onClick={() => handleLinkClicked("timeline")} >
                                Timeline
                            </ScrollLink>
                        </li>
                        <li className="hover:cursor-pointer focus:cursor-pointer" tabIndex={1}>
                            <ScrollLink to={"overview"} smooth={true} duration={500} className={"text-white"} onClick={() => handleLinkClicked("overview")} >
                                Overview
                            </ScrollLink>
                        </li>
                        <li className="hover:cursor-pointer focus:cursor-pointer" tabIndex={1}>
                            <ScrollLink to={"faqs"} smooth={true} duration={500} className={"text-white"} onClick={() => handleLinkClicked("faqs")} >
                                FAQs
                            </ScrollLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} className={({isActive}) => `${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-custom-purple-three to-custom-purple-two font-bold": "text-white"}`} >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to={"/register"} >
                        {
                            ({isActive}) => (
                                <div className={`inline-block p-[0.15rem] rounded-md bg-gradient-to-r from-custom-purple-three to-custom-purple-two`}>
                                    <button className={`px-8 py-1 lg:py-2 lg:px-12 rounded-md text-white ${isActive ? "bg-custom-purple-one" :"bg-gradient-to-r from-custom-purple-three to-custom-purple-two"}`}>
                                            Register
                                    </button>
                                </div>

                            )
                        }
                    </NavLink>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <button
                        className="p-0 rounded-none focus:outline-none"
                        onClick={() => setIsHidden(false)}
                        ref={buttonRef}
                    >
                        <img src={hamburger} alt="hamburger menu icon" />
                    </button>
                    <motion.div
                        className="absolute bg-custom-purple-one w-full top-0 left-0 px-12 py-10 z-10"
                        initial="hidden"
                        animate={isHidden ? "hidden" : "visible"}
                        variants={variants}
                        ref={mobileNavRef}
                    >
                        <div className="flex justify-end">
                            <button
                                className="p-[0.05rem] rounded-full bg-gradient-to-t from-custom-purple-three to-custom-purple-two focus:outline-none"
                                onClick={() => setIsHidden(true)}
                            >
                                <div className="bg-custom-purple-one p-[0.4rem] rounded-full">
                                    <img src={cancel} alt="cancel icon" />
                                </div>
                            </button>
                        </div>
                        <ul className="font-montserrat flex flex-col items-start gap-8 text-sm my-10">
                            <li>
                                <ScrollLink to={"timeline"} smooth={true} duration={500} className={"text-white"} onClick={() => setIsHidden(true)} >
                                    Timeline
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={"overview"} smooth={true} duration={500} className={"text-white"} onClick={() => setIsHidden(true)} >
                                    Overview
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={"faqs"} smooth={true} duration={500} className={"text-white"} onClick={() => setIsHidden(true)} >
                                    FAQs
                                </ScrollLink>
                            </li>
                            <li>
                                <NavLink to={"contact"} className={({isActive}) => `font-bold ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-custom-purple-three to-custom-purple-two": "text-white"}`} onClick={() => setIsHidden(true)} >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink to={"/register"} >
                        {
                            ({isActive}) => (
                                <div className={`inline-block p-[0.15rem] rounded-md bg-gradient-to-r from-custom-purple-three to-custom-purple-two`}>
                                    <button className={`px-8 py-1 lg:py-2 lg:px-12 rounded-md text-white ${isActive ? "bg-custom-purple-one" :"bg-gradient-to-r from-custom-purple-three to-custom-purple-two"}`}>
                                            Register
                                    </button>
                                </div>

                            )
                        }
                    </NavLink>
                    </motion.div>

                </MediaQuery>
            </div>
        </div>
    </header>
  )
}

export default Header