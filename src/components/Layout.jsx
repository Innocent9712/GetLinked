/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Header from "./Header"
import flare_1 from "../assets/images/lens-flare-hero-left.png"
import flare_2 from "../assets/images/lens-flare-hero-right.png"
import MediaQuery from "react-responsive"




const Layout = () => {
  return (
    <div className="bg-custom-purple-one min-h-screen">
      <div className="absolute top-36 md:top-24 -left-12 md:left-0 z-[-100px]">
        <img src={flare_1} alt="lens flare" className=" opacity-70" />
      </div>
        <MediaQuery minWidth={768}>
          <img src={flare_2} alt="lens flare" className="absolute top-0 md:right-0 z-[-10px] opacity-60" />
        </MediaQuery>
        <div className="absolute top-0 left-0 w-full h-full bg-custom-purple-one opacity-30 z-[9px] mix-blend-hue"></div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout
