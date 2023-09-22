import About from "../components/About"
import Faq from "../components/Faq"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Policy from "../components/Policy"
import Prizes from "../components/Prizes"
import Timeline from "../components/Timeline"
import flare_1 from "../assets/images/lens-flare-hero-left.png"
import flare_2 from "../assets/images/lens-flare-hero-right.png"
import MediaQuery from "react-responsive"
import overview_flare_1 from "../assets/images/lens-flare-overview-1.png"
import overview_flare_2 from "../assets/images/lens-flare-overview-2.png"
import overview_flare_3 from "../assets/images/lens-flare-overview-3.png"
import overview_flare_4 from "../assets/images/lens-flare-overview-4.png"
import prize_flare_1 from "../assets/images/lens-flare-prize-1.png"
import prize_flare_1_mobile from "../assets/images/lens-flare-prize-1-mobile.png"
import partner_flare_1 from "../assets/images/lens-flare-partner-1.png"
import partner_flare_2 from "../assets/images/lens-flare-partner-2.png"
import privacy_flare from "../assets/images/lens-flare-privacy.png"
import bg_image from "../assets/images/bg-overlay.png"
import bg_image_mobile from "../assets/images/bg-overlay-mobile.png"
import { useMediaQuery } from "react-responsive"


const Landing = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <div className="relative">
        <div className="absolute top-36 md:top-24 -left-12 md:left-0 z-[-100px]">
          <img src={flare_1} alt="lens flare" className=" opacity-70" />
        </div>
        <MediaQuery minWidth={768}>
          <img src={flare_2} alt="lens flare" className="absolute top-0 md:right-0 z-[-10px] opacity-60" />
        </MediaQuery>
        <Hero />
      </div>
      <div className="relative">
        <img src={overview_flare_1} alt="lens flare" className="absolute top-[45rem] lg:top-[45rem] -left-12 z-[-10px] opacity-60" />
        <img src={overview_flare_2} alt="lens flare" className="absolute top-[50rem] lg:top-[70rem] lg:right-0 z-[-10px] opacity-60" />
        <img src={overview_flare_3} alt="lens flare" className="absolute top-[100rem] lg:top-[110rem] left-0 z-[-10px] opacity-60" />
        <img src={overview_flare_4} alt="lens flare" className="absolute top-[150rem] lg:top-[130rem] lg:right-0 z-[-10px] opacity-60" />

        <About />
      </div>
       <Faq />
       <Timeline />
       <div className="relative">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-blend-overlay"
          style={{
            backgroundImage: `url(${isTabletOrLarger ? bg_image : bg_image_mobile})`,
            opacity: 0.1, // Adjust the opacity value as needed (0.2 for example)
          }}
        ></div>
        <img src={isTabletOrLarger ? prize_flare_1 : prize_flare_1_mobile} alt="lens flare" className="absolute top-[1rem] lg:top-[-7rem] lg:left-0 z-[-10px] opacity-60" />
        <img src={overview_flare_2} alt="lens flare" className="absolute top-[40rem] lg:top-[10rem] right-0 z-[-10px] opacity-60 w-48 md:w-auto" />
        <Prizes />
       </div>
       <div className="relative">
          <img src={partner_flare_1} alt="lens flare" className="absolute top-[-5rem] lg:top-[-8rem] left-0 z-[-10px] opacity-60 w-48 md:w-auto" />
          <img src={partner_flare_2} alt="lens flare" className="absolute top-[15rem] lg:top-[10rem] right-0 z-[-10px] opacity-60 w-48 md:w-auto" />
          <Partners />
       </div>
       <div className="relative">
          <img src={privacy_flare} alt="lens flare" className="absolute top-[35rem] lg:top-[10rem] -left-4 z-[-10px] opacity-60 w-48 md:w-auto" />
          <Policy />
       </div>
    </div>
  )
}

export default Landing