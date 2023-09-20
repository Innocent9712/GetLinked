import hero_stroke from "../assets/icons/hero_stroke.svg"
import chain from "../assets/icons/chain.svg"
import blast from "../assets/icons/blast.svg"
import hero_img from "../assets/images/digital_sage.png"
import { useEffect, useState } from "react";

const Hero = () => {
  const [countdown, setCountdown] = useState(generateRandomTime()); // Initial countdown value in seconds

  function generateRandomTime() {
    // Generate a random time between 2 and 12 hours (in seconds)
    return Math.floor(Math.random() * (12 - 2 + 1) + 2) * 3600;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  const formatTime = (timeInSeconds, format) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    if (format)
      return format == "hour" ? 
        `${formattedHours}` :
        format == "minute" ?
        `${formattedMinutes}`:
        `${formattedSeconds}`

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <section className="mt-12 relative border-b border-white border-opacity-25">
      <div className="max-w-[104rem] ml-auto relative">
          <div className="flex justify-center md:justify-end">
              <h2 className='relative w-fit md:mr-12 lg:mr-36 font-montserrat italic font-bold text-base md:text-lg lg:text-4xl'>
                  Igniting a Revolution in HR Innovation
                  <img src={hero_stroke} alt="selective underline" className='absolute -bottom-2 right-0 lg:right-2 w-32  md:w-36 lg:w-64' />
              </h2>
          </div>
          <div className="mt-8 md:flex md:justify-end">
              <div className="flex flex-col items-center md:items-start md:absolute md:left-12 md:top-24 lg:top-48">
                  <h2 className="font-clash-bold flex flex-col items-center text-3xl md:text-4xl lg:text-[5.5rem] md:items-start lg:gap-12">
                      <span>
                          getlinked Tech <br/>
                      </span>
                      <span className="flex items-center">
                          Hackathon <span>1.0</span>
                          <img src={chain} alt="chain icon" className="w-8 md:w-12 lg:w-20" />
                          <img src={blast} alt="chablastin icon" className="w-8 md:w-12 lg:w-20" />
                      </span>
                  </h2>
                  <p className="font-montserrat text-white leading-6 mt-4 text-sm md:text-start lg:text-xl lg:mt-8">Participate in getlinked tech Hackathon <br /> 2023 stand a chance to win a Big prize</p>
                  <button className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-12 rounded-sm mx-auto block mt-8 md:mr-auto md:mx-0">
                      Register
                  </button>
                  <div className="mt-8">
                      {/* <p>{formatTime(countdown)}</p> */}
                      <p className="text-base lg:text-lg lg:mt-12">
                          <span className="font-unica text-5xl lg:text-7xl">{formatTime(countdown, "hour")}</span>
                          <span className="mr-4">H</span>
                          <span className="font-unica text-5xl lg:text-7xl">{formatTime(countdown, "minute")}</span>
                          <span className="mr-4">M</span>
                          <span className="font-unica text-5xl lg:text-7xl">{formatTime(countdown, "second")}</span>
                          <span className="4">S</span>
                      </p>
                  </div>
              </div>
              <div className="mt-8 relative -z-1 md:basis-[50%]">
                <div className="absolute top-0 left-0 w-full h-full bg-[#2b3191] opacity-30 z-[9px] mix-blend-hue"></div>
                <img src={hero_img} alt="Hero Image" className="w-full" />
              </div>
          </div>
      </div>
    </section>
  )
}

export default Hero