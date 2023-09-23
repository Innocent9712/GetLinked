import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import contact_flare_1 from "../assets/images/lens-flare-contact-1.png"
import contact_flare_2 from "../assets/images/lens-flare-contact-2.png"
import busy_man from "../assets/icons/busy_man.svg"
import walking_man from "../assets/icons/walking_man.svg"
import walking_woman from "../assets/icons/walking_woman.svg"

const SignUp = () => {
    const [categories, setCategories] = useState([])
    const [sizes, setSizes] = useState([1, 2, 3, 4, 5])
    const [data, setData] = useState({
        team_name: "",
        email: "",
        phone: "",
        topic: "",
        category: "",
        size: "",
        agree: false
    })

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        })
    }

  return (
    <div className="relative min-h-screen bg-custom-purple-one font-montserrat pb-24">
          <img src={contact_flare_1} alt="lens flare" className="absolute opacity-70 top-0 left-0" />
      <MediaQuery maxWidth={780}>

        <div className="relative w-[80%] max-w-[90rem] mx-auto pt-12 mb-12">
            <div className="inline-block p-[0.1rem] rounded-full bg-gradient-to-r from-custom-purple-three to-custom-purple-two">
              <button className="p-1 w-8 h-8 rounded-full">
                <Link to={"/"}>
                  <i className="ri-arrow-left-s-line"></i>
                </Link>
              </button>
            </div>
        </div>

        <h3 className='text-custom-purple-three font-clash-semibold text-lg w-[70%] mx-auto'>Register</h3>
      </MediaQuery>

      <MediaQuery minWidth={781}>
        <Header />
      </MediaQuery>
      
      <div className=" w-[90%] max-w-[85rem] mx-auto lg:mt-24">
        <MediaQuery minWidth={781}>
          <img src={contact_flare_2} alt="lens flare" className="absolute opacity-40 bottom-0 right-0" />
        </MediaQuery>
            <div className="relative flex flex-col lg:flex-row justify-between">
                <div className='lg:basis-[50%]'>
                    <img src={busy_man} alt="man on a chair" className="w-full" />
                </div>
                <div className="lg:basis-[55%] lg:backdrop-blur-sm p-4 lg:rounded-lg lg:bg-white/5 lg:backdrop-opacity-5 lg:backdrop-contrast-200 lg:px-16 lg:mr-20 flex flex-col gap-8 py-12">
                    <MediaQuery minWidth={781}>
                        <h3 className='text-custom-purple-three font-clash-semibold text-lg lg:text-2xl mb-2'>Register</h3>
                    </MediaQuery>

                    <div className='font-montserrat'>
                        <div className='mb-8'>
                            <p className='text-xs flex items-end font-bold'>Be part of this movement!
                                <span className='flex gap-1'>
                                    <img src={walking_man} alt="person walking" />
                                    <img src={walking_woman} alt="person walking" />
                                </span>
                            </p>
                            <p className='text-lg lg:text-xl mt-4'>CREATE YOUR ACCOUNT</p>
                        </div>
                        <div className='flex flex-wrap gap-y-8 justify-between text-sm mt-8'>
                            <div className='basis-full md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="team_name" className="font-bold pl-2">Team's Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter the name of your group"
                                    name="team_name"
                                    id="team_name"
                                    className="py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
                                    value={data.team_name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className='basis-full md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="phone" className="font-bold pl-2">Phone</label>
                                <input
                                    type="number"
                                    placeholder="Enter your phone number"
                                    name="phone"
                                    id="phone"
                                    className="py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
                                    value={data.phone}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-y-8 justify-between text-sm mt-8'>
                            <div className='basis-full md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="email" className="font-bold pl-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    name="email"
                                    id="email"
                                    className="py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
                                    value={data.email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className='basis-full md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="topic" className="font-bold pl-2">Project Topic</label>
                                <input
                                    type="text"
                                    placeholder="What's your group project topic"
                                    name="topic"
                                    id="topic"
                                    className="py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
                                    value={data.topic}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-y-8 justify-between text-sm mt-8'>
                            <div className='basis-[30%] md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="category" className="font-bold pl-2">Category</label>
                                <select
                                    type="category"
                                    name="category"
                                    id="category"
                                    className="py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
                                    value={data.category}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option value="">Select your category</option>
                                    {
                                        categories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='basis-[35%] md:basis-[45%] flex flex-col gap-2'>
                                <label htmlFor="size" className="font-bold pl-2">Group size</label>
                                <select
                                    type="size"
                                    name="size"
                                    id="size"
                                    className="w-[100%] py-3 px-3 lg:bg-white lg:bg-opacity-10 bg-transparent focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm overflow-hidden"
                                    value={data.size}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option value="truncate"  className={`py-4 ${data.size == size ? "text-custom-purple-one bg-custom-purple-three": "bg-custom-purple-one text-custom-purple-three"}`}>Select your group size</option>
                                    {
                                        sizes.map((size, index) => (
                                            <option key={index} value={size} className={`py-4 ${data.size == size ? "text-custom-purple-one bg-custom-purple-three": "bg-custom-purple-one text-custom-purple-three"}`}>{size}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='mt-8 text-xs'>
                            <p className='text-custom-purple-three'>Please review your registration details before submitting.</p>
                            <div className='flex items-start gap-2 mt-4'>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    id="agree"
                                    checked={data.agree}
                                    onChange={(e) => setData((prevState) => ({...prevState, [e.target.name]: e.target.checked}))}
                                />
                                <label htmlFor="agree">I agreed with the event terms and conditions  and privacy policy.</label>
                            </div>
                        </div>

                        <button  className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-10 rounded-sm mx-auto block lg:w-full mt-8">
                            Register Now
                        </button>
                    </div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default SignUp