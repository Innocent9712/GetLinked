import About from "../components/About"
import Faq from "../components/Faq"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Prizes from "../components/Prizes"
import Timeline from "../components/Timeline"

const Landing = () => {
  return (
    <>
       <Hero />
       <About />
       <Faq />
       <Timeline />
       <Prizes />
       <Partners />
    </>
  )
}

export default Landing