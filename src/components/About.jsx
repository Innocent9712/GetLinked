import idea from "../assets/icons/idea.svg"
import lazy_lady from "../assets/icons/lazy_lady.svg"
import decisions from "../assets/icons/decisions.svg"
import AnimatedSection from './OverviewSection'
import star_purple from "../assets/icons/star_purple.svg"
import star_white from "../assets/icons/star_white.svg"
import star_gray from "../assets/icons/star_gray.svg"
import squiggle from "../assets/icons/squiggle.svg"
import StarBlink from "./Star2"


const About = () => {

    const part1 = [
        <h3 key="23ttd" className="font-clash-bold text-xl text-center md:text-left md:text-3xl">Introduction to getlinked<br /><span className="text-custom-purple-three">tech Hackathon 1.0</span></h3>,
        <p key="djdfgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you&apos;re a coding genius, a 
        design maverick, or a concept wizard, you&apos;ll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that&apos;s what we&apos;e all about!</p>
    ]

    const part2 = [
        <h3 key="23ttd" className="font-clash-bold text-xl text-center md:text-left md:text-3xl">Rules and<br /><span className="text-custom-purple-three">Guidelines</span></h3>,
        <p key="djdfgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full mb-12 lg:mb-0">Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you&apos;re a coding genius, a 
        design maverick, or a concept wizard, you&apos;ll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that&apos;s what we&apos;re all about!</p>
    ]

    const part3 = [
        <h3 key="23ttd" className="font-clash-bold text-xl text-center md:text-left md:text-3xl">Judging Criteria<br /><span className="text-custom-purple-three">Key Attributes</span></h3>,
        <p key="djdfgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">
            <span className="text-custom-pink">Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world problem in a novel 
            way or introduces innovative features.
        </p>,
        <p key="djrfgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">
            <span className="text-custom-pink">Functionality</span>: Assess how well the solution works. Does it perform its 
            intended functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
        </p>,
        <p key="djrbgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">
           <span className="text-custom-pink">Impact and Relevance</span>: Determine the potential impact of the solution 
            in the real world. Does it address a significant problem, and is it relevant 
            to the target audience? Judges would assess the potential social, 
            economic, or environmental benefits.
        </p>,
        <p key="darbgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">
            <span className="text-custom-pink">Technical Complexity</span>: Evaluate the technical sophistication of the solution. 
            Judges would consider the complexity of the code, the use of advanced 
            technologies or algorithms, and the scalability of the solution.
        </p>,
        <p key="darbgls" className="font-montserrat text-sm mt-4 w-[80%] mx-auto text-center md:text-left md:mx-0 md:text-lg md:mt-8 md:w-full">
            <span className="text-custom-pink">Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
            to the rules and guidelines of the hackathon, including deadlines, use of 
            specific technologies or APIs, and any other competition-specific requirements.
        </p>,
        <button key="button354" className="bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white py-2 px-12 rounded-sm mx-auto block mt-8 md:mr-auto md:mx-0">
            Read More
        </button>
    ]
  return (
    <section className="relative bg-custom-purple-four bg-opacity-20  mt-6" id="overview">
        <StarBlink image={star_purple} styles={"w-4 top-12 left-10 md:w-10 lg:w-14 md:top-20 "} />
        <StarBlink image={star_purple} styles={"w-2 top-[16%] right-6 md:top-[15%] md:w-8 md:right-24 lg:top-[12%]"} />
        <StarBlink image={star_white} styles={"w-4 top-[28%] left-4 md:left-[30%] lg:top-[10%]"} />
        <StarBlink image={star_gray} styles={"w-2 top-[42%] right-12 md:right-[50%] md:w-4 md:top-[40%] lg:right-48 lg:w-6"} />
        <StarBlink image={star_white} styles={"w-4 top-[54%] left-12 lg:top-[42%] lg:left-[28%] lg:w-6"} />
        <StarBlink image={star_purple} styles={"w-4 top-[56%] left-[50%] md:top-[59%] md:w-6 md:left-[55%]"} />
        <StarBlink image={star_gray} styles={"w-4 top-[64%] left-[55%] md:top-[70%] md:left-[50%] lg:w-6 lg:left-[15%]"} />
        <StarBlink image={star_white} styles={"w-4 top-[98%] left-[85%] lg:w-6"} />
        <img src={squiggle} alt="squiggle design" className="absolute left-[80%] top-[13%] w-12 lg:w-20 lg:top-[28%] lg:left-[50%]" />
        <div className="border-b border-white pb-6 border-opacity-25">
            <AnimatedSection image={idea} textItems={part1} reverse={false} />
        </div>
        <div className="border-b border-white pb-6 border-opacity-25">
            <AnimatedSection image={lazy_lady} textItems={part2} reverse={true} />
        </div>
        <div className="border-b border-white pb-6 border-opacity-25">
            <AnimatedSection image={decisions} textItems={part3} reverse={false} />
        </div>
    </section>
  )
}

export default About
