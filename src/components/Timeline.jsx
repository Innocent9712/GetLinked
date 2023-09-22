/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import MediaQuery from "react-responsive"

const TimelineItem = ({title, content, date, step, reverse}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [boxWidth, setBoxWidth] = useState(undefined);
    const [leftOffset, setLeftOffset] = useState(undefined);
  
    // Function to update window width
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      // Add event listener for window resize
      window.addEventListener('resize', handleWindowResize);
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    useEffect(() => {
      // Set boxWidth to 60% of window width or 760px, whichever is smaller
      const calculatedBoxWidth = windowWidth * 0.8 > 900 ? 900 : windowWidth * 0.8;
      setBoxWidth(`${calculatedBoxWidth}px`);
  
      // Calculate left offset to center the div
      const calculatedLeftOffset = (windowWidth - calculatedBoxWidth) / 2;
      setLeftOffset(`${calculatedLeftOffset * 3}px`);
    }, [windowWidth]);
  
    return (
      <li className='flex justify-start relative'>
        <div className='flex flex-col items-center gap-y-2'>
          <div className='h-32 w-1 bg-custom-purple-two lg:h-32'></div>
          <div className='w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white flex items-center justify-center'>
            <p>{step}</p>
            <div
              className={`absolute font-montserrat w-[80%] lg:w-[53rem] lg:flex lg:justify-between lg:items-center text-sm top-18 left-12 ${ reverse ? "lg:left-[-550px]" : "lg:left-[-260px]"}`}
            >
              <div className={ ` ${reverse ? "lg:text-right" : "order-1"} basis-7/12`}>
                <h4 className={`text-custom-purple-two font-bold mb-4 lg:text-xl`}>{title}</h4>
                <p>{content}</p>
                <MediaQuery maxWidth={767}>
                  <h4 className='text-custom-purple-two font-bold mt-2'>{date}</h4>
                </MediaQuery>
              </div>
              <MediaQuery minWidth={768}>
                <div className='flex flex-end w-full basis-3/12 lg:text-lg'>
                  <h4 className={`text-custom-purple-two font-bold mb-4 text-right w-full ${reverse ? "lg:text-left": ""}`}>{date}</h4>
                </div>
              </MediaQuery>
            </div>
          </div>
        </div>
      </li>
    );
  };
  


const Timeline = () => {
  return (
    <section className="mt-12 lg:mt-24 mb-12" id="timeline">
        <div>
            <div className='w-[80%] max-w-4xl flex flex-col items-center justify-center mx-auto gap-4'>
                <h3 className='font-clash-bold text-xl'>Timeline</h3>
                <p className='text-white font-montserrat text-sm text-center md:text-base'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
            <div>
                <ul className='mt-12 flex flex-col gap-y-1 lg:items-center pb-24'>
                    {/* <li className='flex justify-start relative'>
                        <div className='flex flex-col items-center gap-y-2'>
                            <div className='h-24 w-1 bg-custom-purple-two'></div>
                            <div className='w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-custom-purple-three to-custom-purple-two text-white flex items-center justify-center'>
                                <p>1</p>
                                <div className='absolute font-montserrat w-[80%] lg:w-[54rem] lg:flex lg:justify-between lg:items-center text-sm top-18 left-12 lg:left-[-26rem]'>
                                    <div className='order-1 basis-5/12'>
                                        <h4 className='text-custom-purple-two font-bold mb-4'>Hackathon Announcement</h4>
                                        <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                                        <MediaQuery maxWidth={767}>
                                            <h4 className='text-custom-purple-two font-bold mt-2'>November 18, 2023</h4>
                                        </MediaQuery>
                                    </div>
                                    <MediaQuery minWidth={768}>
                                        <div className='flex flex-end w-full basis-5/12'>
                                            <h4 className='text-custom-purple-two font-bold mb-4 text-right w-full'>November 18, 2023</h4>
                                        </div>
                                    </MediaQuery>                                    
                                </div>
                            </div>
                        </div>
                    </li> */}
                    <TimelineItem
                        title={"Hackathon Announcement"}
                        content={"The getlinked tech hackathon 1.0 is formally announced to the general public, and teams begin to get ready to register."}
                        date={"November 18, 2023"}
                        step={1}
                        reverse={true}
                    />
                    <TimelineItem
                        title={"Teams Registration begins"}
                        content={"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register."}
                        date={"November 18, 2023"}
                        step={2}
                        reverse={false}
                    />

                    <TimelineItem
                        title={"Teams Registration ends"}
                        content={"Interested Participants are no longer Allowed to register."}
                        date={"November 18, 2023"}
                        step={3}
                        reverse={true}
                    />

                    <TimelineItem
                        title={"Announcement of the accepted teams and ideas"}
                        content={"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced."}
                        date={"November 18, 2023"}
                        step={4}
                        reverse={false}
                    />

                    <TimelineItem
                        title={"Getlinked Hackathon 1.0 Offically Begins"}
                        content={"Accepted teams can now proceed to build their ground breaking skill driven solutions."}
                        date={"November 18, 2023"}
                        step={5}
                        reverse={true}
                    />

                    <TimelineItem
                        title={"Demo Day"}
                        content={"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day."}
                        date={"November 18, 2023"}
                        step={6}
                        reverse={false}
                    />
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Timeline