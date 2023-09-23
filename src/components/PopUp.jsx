/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import star_purple from "../assets/icons/star_purple.svg"
import star_gray from "../assets/icons/star_gray.svg"
import StarBlink from "./Star2";

const PouUp = ({children}) => {
  return (
    <div className="fixed top-0 left-0 min-w-full h-full z-20 bg-custom-purple-one bg-opacity-80 flex justify-center items-center">
        <StarBlink image={star_purple} styles={"w-3 top-[15%] left-[85%] md:w-4 lg:w-6 lg:left-[70%] lg:top-[5%]"} />
        <StarBlink image={star_gray} styles={"w-4 top-[45%] left-[15%] md:w-4 lg:w-7 lg:left-[35%] "} />
        <StarBlink image={star_purple} styles={"w-3 top-[85%] left-[80%] md:w-4 lg:w-6 lg:left-[65%] lg:top-[95%] "} />
        <div className='max-w-2xl w-[80%] border border-custom-purple-three rounded-lg h-[60vh] lg:h-[80vh] flex items-center'>
            {children}
        </div>
    </div>
  )
}

export default PouUp