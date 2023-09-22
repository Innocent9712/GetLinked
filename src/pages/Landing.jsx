import About from "../components/About"
import Faq from "../components/Faq"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Policy from "../components/Policy"
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
       <Policy />
    </>
  )
}

export default Landing