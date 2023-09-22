/* eslint-disable react/prop-types */
import cup from "../assets/icons/cup.svg"
import gold_medal from "../assets/icons/gold_medal.svg"
import silver_medal from "../assets/icons/silver_medal.svg"
import bronze_medal from "../assets/icons/bronze_medal.svg"


const MedalComponent = ({ image, position, reward, color, middle}) => {
    return (
        <li className={`basis-1/3 ${middle ? "" : "mb-8"}`}>
            <div className={`relative rounded-md border border-${color} bg-${color} w-full bg-opacity-30`}>
                <div className={` absolute inset-1/2 transform -translate-x-1/2  w-full ${middle ? "w-[9rem] top-[-6.5rem] lg:w-56 lg:top-[-9.5rem]" : "top-[-5rem] lg:top-[-7rem]"}`}>
                {/* <div> */}
                    <img src={image} alt={reward} className={`w-full`} />
                </div>
                <h3 className={`${middle? "mt-16 lg:mt-[6rem]" : "mt-10 lg:mt-20"} text-center text-lg lg:text-2xl font-montserrat font-bold`}>{position}</h3>
                <h4 className='my-2 text-center font-montserrat'>Runner</h4>
                <p className={`text-${color} text-center mt-2 mb-6 lg:text-xl font-bold font-montserrat`}>{reward}</p>

            </div>
        </li>
    )
}


const Prizes = () => {
  return (
    <section className="relative mt-12 lg:mt-24 mb-12 py-24 flex justify-center" id="">
        <div className='w-[80%] max-w-6xl grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 gap-4'>
            <div className='lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-1  text-center lg:text-left flex  items-start justify-center'>
                {/* This is the first div */}
                <div className='lg:mb-12'>
                    <h2 className='font-clash-bold text-white text-xl lg:text-2xl mb-2'>Prizes and <br /><span className='text-custom-purple-three'>Rewards</span></h2>
                    <p className='text-sm w-[80%] lg:w-[60%] mx-auto lg:mx-0'>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
            </div>
            <div className='lg:col-span-2 lg:row-start-1 lg:row-span-4 flex items-center px-4 py-8 lg:py-0'>
                {/* This is the middle div */}
                <img src={cup} alt="Prize cup" className='w-full lg:w-[80%]' />
            </div>
            <div className='lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:row-span-3'>
                {/* This is the last div */}
                <ul className="flex gap-2 lg:gap-4 items-end mt-36">
                    <MedalComponent image={silver_medal} position="2nd" reward="N300,000" color="custom-purple-two" />
                    <MedalComponent image={gold_medal} position="1st" reward="N400,000" color="custom-purple-three" middle={true} />
                    <MedalComponent image={bronze_medal} position="3rd" reward="N150,000" color="custom-purple-two" />
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Prizes