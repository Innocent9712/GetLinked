import idea from "../assets/icons/idea.svg"
import lazy_lady from "../assets/icons/lazy_lady.svg"
import decisions from "../assets/icons/decisions.svg"
import AnimatedSection from './OverviewSection'

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
