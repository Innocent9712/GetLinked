import { useState } from "react"
import MediaQuery from "react-responsive"
import { Link } from "react-router-dom"
import contact_flare_1 from "../assets/images/lens-flare-contact-1.png"
import contact_flare_2 from "../assets/images/lens-flare-contact-2.png"
import Header from "../components/Header"
import { contact } from "../api"
import { validateInput } from "../utils"
import PopUp from '../components/PopUp'
import Loading from '../components/Loading'


const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    first_name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleContact = async () => {
    const checkData = [
      {
        type: "text",
        name: "First Name",
        data: data.first_name,
      },
      {
        type: "email",
        name: "Email",
        data: data.email
      },
      {
        type: "text",
        name: "Message",
        data: data.message
      }
    ]

    const checkInputs = validateInput(checkData)
    // console.log(checkInputs)
    if(!checkInputs.status) {
        alert(`Error! check the ${checkInputs.issue} field.`)
        return;
    }

    setLoading(true)
    const response = await contact(data)
    console.log(response)

    if (response.status == 201) {
      setSuccess(true)
      setData({
        first_name: "",
        email: "",
        message: ""
      })
    }
    setLoading(false)

  }

  return (
    <div className="relative min-h-screen bg-custom-purple-one font-montserrat">
        {
            success &&
            <PopUp>
                <div className='flex flex-col items-center w-full'>
                    <h2 className='text-center w-[90%] font-bold my-4 lg:text-2xl'>Sent!</h2>
                    <p className='text-xs text-center w-[80%] leading-5 lg:text-sm'>Your message has been sent successfully.<br />
                        <span>
                            You would be hearing back from us soon.
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
      </MediaQuery>

      <MediaQuery minWidth={781}>
        <Header />
      </MediaQuery>
      
    <div className=" w-[80%] max-w-7xl mx-auto mt-24">
      <MediaQuery minWidth={1024}>
          <img src={contact_flare_2} alt="lens flare" className="absolute opacity-40 bottom-0 right-0" />
        <div className="relative flex justify-between">
          <div className="text-base flex flex-col gap-8 py-12">
              <h2 className="font-clash-semibold text-custom-purple-three text-3xl">Get in touch</h2>
              <p>Contact <br /> Information</p>
              <p>27,Alara Street <br />Yaba 100012 <br />Lagos State</p>
              <p>Call Us : 07067981819</p>
              <p>we are open from Monday-Friday <br />08:00am - 05:00pm</p>
              <div>
                <p className="text-custom-purple-three">Share On</p>
                <ul className='flex gap-6 text-base lg:text-xl mt-2'>
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
          <div className="backdrop-blur-sm p-4 rounded-lg bg-white/5 backdrop-opacity-5 backdrop-contrast-200 px-24 mr-20 flex flex-col gap-8 py-12">
            <h3 className='text-custom-purple-three font-clash-semibold text-lg'>Questions or need assistance? <br />Let us know  about it!</h3>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white w-96 text-sm"
              value={data.first_name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white w-96 text-sm"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="8"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white w-96 text-sm resize-none"
              value={data.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button 
              className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-12 rounded-sm mx-auto block"
              onClick={handleContact}
            >
                {
                  loading ? <Loading /> :  "Submit"
                }
            </button>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <div className="relative flex flex-col justify-between items-center gap-20">
          <div className="flex flex-col gap-6">
            <h3 className='text-custom-purple-three font-clash-semibold text-xl w-[70%]'>Questions or need assistance? <br />Let us know  about it!</h3>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
              value={data.first_name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="8"
              className="bg-white bg-opacity-10 focus:outline-none text-white rounded-md p-2 border focus:border-2 border-white text-sm resize-none"
              value={data.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button 
              className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-10 rounded-sm mx-auto block"
              onClick={handleContact}
            >
                {
                  loading ? <Loading /> :  "Submit"
                }
            </button>
          </div>
          <div className="flex flex-col items-center">
                <p className="text-custom-purple-three">Share On</p>
                <ul className='flex gap-6 text-base lg:text-xl mt-2'>
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
      </MediaQuery>
    </div>
    </div>
  )
}

export default Contact