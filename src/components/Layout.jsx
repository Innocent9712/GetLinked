/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"




const Layout = () => {
  return (
    <div className="bg-custom-purple-one min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-purple-one opacity-30 z-[9px] mix-blend-hue"></div>
        <div className="fixed top-0 bg-custom-purple-one w-full z-10">
          <Header />
        </div>
        <main className="pt-24">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
