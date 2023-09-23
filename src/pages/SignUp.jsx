import { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import contact_flare_1 from "../assets/images/lens-flare-contact-1.png"
import contact_flare_2 from "../assets/images/lens-flare-contact-2.png"
import busy_man from "../assets/icons/busy_man.svg"
import walking_man from "../assets/icons/walking_man.svg"
import walking_woman from "../assets/icons/walking_woman.svg"
import congratulation from "../assets/icons/congratulation.svg"
import wink_emoji from "../assets/icons/wink_emoji.svg"
import { getCategories, register } from '../api'
import { validateInput } from '../utils'
import Loading from '../components/Loading'
import PopUp from '../components/PopUp'

const SignUp = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const sizes = [1, 3, 5, 8, 10]
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

    const handleFetchCategories = async () => {
        const response = await getCategories()

        if (response.status == 200)
            // console.log(response.data)
            setCategories(response.data)
    }

    const handleRegister = async () => {
        const checkData = [
            {
                type: "text",
                name: "Team Name",
                data: data.team_name
            },
            {
                type: "phone",
                name: "Phone number",
                data: data.phone
            },
            {
                type: "email",
                name: "Email",
                data: data.email
            },
            {
                type: "text",
                name: "Topic",
                data: data.topic
            },
            {
                type: "text",
                name: "Category",
                data: data.category
            },
            {
                type: "text",
                name: "Group Size",
                data: data.size
            },
            {
                type: "boolean",
                name: "Terms Agreement",
                data: data.agree
            },
        ]
        const checkInputs = validateInput(checkData)
        // console.log(checkInputs)
        if(!checkInputs.status) {
            alert(`Error! check the ${checkInputs.issue} field.`)
            return;
        }

        const registerData = {
            email: data.email,
            phone_number: data.phone,
            team_name: data.team_name,
            group_size: data.group_size,
            project_topic: data.topic,
            category: data.category,
            privacy_policy_accepted: data.accept
        }

        setLoading(true)
        const response = await register(registerData)
        console.log(response)

        if (response.status == 201) {
            setSuccess(true)
            setData({
                team_name: "",
                email: "",
                phone: "",
                topic: "",
                category: "",
                size: "",
                agree: false
            })
        }
        setLoading(false)
    }
    

    useEffect(() => {
        handleFetchCategories()
    }, [])
    

  return (
    <div className="relative min-h-screen bg-custom-purple-one font-montserrat pb-24">
        {
            success &&
            <PopUp>
                <div className='flex flex-col items-center w-full'>
                    <img src={congratulation} alt="sucess" className='w-[60%] lg:w-[40%]' />
                    <h2 className='text-center w-[90%] font-bold my-4 lg:text-2xl'>Congratulations<br /> you have successfully Registered!</h2>
                    <p className='text-xs text-center w-[80%] leading-5 lg:text-sm'>Yes, it was easy and you did it!<br />
                        <span>
                            check your mail box for next step <img src={wink_emoji} alt="a wink" className="inline m-0 p-0" />
                        </span>
                    </p>
                    <button 
                            className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-10 rounded-sm mx-auto block lg:w-[80%] mt-8"
                            onClick={() => setSuccess(false)}
                        >
                            Back
                        </button>
                    {/* <p className='text-xs text-center w-[60%] flex'>Yes, it was easy and you did it! check your mail box for next step 😉.</p> */}
                </div>
            </PopUp>
        }
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
                                <label htmlFor="team_name" className="font-bold pl-2">Team&apos;s Name</label>
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
                                    <option value="" className={`py-4 ${data.category == "" ? "text-custom-purple-one bg-custom-purple-three": "bg-custom-purple-one text-custom-purple-three"}`}>Select your category</option>
                                    {
                                        categories.map((category) => (
                                            <option key={category?.id} value={category?.id} className={`py-4 ${data.category == category ? "text-custom-purple-one bg-custom-purple-three": "bg-custom-purple-one text-custom-purple-three"}`}>{category?.name}</option>
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
                                    <option value="truncate"  className={`py-4 ${data.size == "" ? "text-custom-purple-one bg-custom-purple-three": "bg-custom-purple-one text-custom-purple-three"}`}>Select your group size</option>
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

                        <button 
                            className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-10 rounded-sm mx-auto block lg:w-full mt-8"
                            onClick={handleRegister}
                            disabled={loading}
                        >
                            {
                                loading ? <Loading /> :  "Register Now"
                            }
                        </button>
                    </div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default SignUp