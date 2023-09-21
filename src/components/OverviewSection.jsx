/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';
// import { useInView } from 'framer-motion';

// const slideInFromLeftVariants = {
//   hidden: {
//     opacity: 0,
//     x: '-50%', // Start position for sliding in from the left
//   },
//   visible: {
//     opacity: 1,
//     x: '0%',
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// const slideInFromRightVariants = {
//   hidden: {
//     opacity: 0,
//     x: '50%', // Start position for sliding in from the right
//   },
//   visible: {
//     opacity: 1,
//     x: '0%',
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// // eslint-disable-next-line react/prop-types
// const Sample = ({ reverse, image, textItems }) => {
//   const controls = useAnimation();
//   const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
//   const ref = useRef(null)
//   const isInView = useInView(ref, {
//     once: true,
//     amount: isTabletOrLarger ? 0 : 0.5,
//     margin: "300px 0px 0px 0px"
//   });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: isTabletOrLarger ? 0 : 0.1, // Add a small delay between animating children
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: {
//       opacity: 0,
//       x: reverse ? '-50%' : '50%', // Start position from the left or right based on reverse
//     },
//     visible: index => ({
//       opacity: 1,
//       x: '0%',
//       transition: {
//         duration: 0.7,
//         delay: index * 1,
//         ease: 'easeOut',
//       },
//     }),
//   };

//   useEffect(() => {
//     isInView && controls.start('visible')
// }, [isInView, controls])
  
// console.log(isInView)

//   return (
//     <motion.div
//       className={`flex flex-col gap-12 lg:flex-row items-center lg:justify-between sample max-w-[90rem] w-[90%] mx-auto py-8`}
//       variants={containerVariants}
//       initial="hidden"
//       animate={"visible"}
//       ref={ref} // Attach the ref to the main container
//     >
//       <motion.div
//         className={`md:basis-7/12 ${reverse && isTabletOrLarger ? 'order-1' : ''}`}
//         variants={{
//           ...(reverse ? slideInFromRightVariants : slideInFromLeftVariants),
//           staggerChildren: 1,
//         }}
//         animate={isInView ? 'visible' : 'hidden'} // Trigger animation when in view
//       >
//         <motion.img src={image} alt="image" className="md:w-full" />
//       </motion.div>
//       <motion.div
//         className="md:basis-5/12"
//         variants={reverse ? slideInFromLeftVariants : slideInFromRightVariants}
//       >
//         {textItems.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={lineVariants}
//             initial="hidden"
//             animate={isInView ? 'visible' : 'hidden'} // Trigger animation when in view
//             custom={index} // Pass the index as a custom prop for lineVariants
//           >
//             {item}
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Sample;




import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'framer-motion';

const slideInFromLeftVariants = {
  hidden: {
    opacity: 0,
    x: '-50%', // Start position for sliding in from the left
  },
  visible: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const slideInFromRightVariants = {
  hidden: {
    opacity: 0,
    x: '-50%', // Start position for sliding in from the right (this causes a right overflow of empty space)
  },
  visible: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// eslint-disable-next-line react/prop-types
const Sample = ({ reverse, image, textItems }) => {
  const controls = useAnimation();
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: isTabletOrLarger ? 0 : 0.5,
    margin: "300px 0px 0px 0px"
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isTabletOrLarger ? 0 : 0.1, // Add a small delay between animating children
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
    //   x: reverse ? '-50%' : '50%', // Start position from the left or right based on reverse
    },
    visible: index => ({
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.7,
        delay: index * 1,
        ease: 'easeOut',
      },
    }),
  };

  useEffect(() => {
    isInView && controls.start('visible')
}, [isInView, controls])
  
console.log(isInView)

  return (
    <div
      className={`flex flex-col gap-12 lg:flex-row items-center lg:justify-between sample max-w-[90rem] w-[90%] mx-auto py-8`}
      ref={ref} // Attach the ref to the main container
    >
      <motion.div
        className={`md:basis-7/12 ${reverse && isTabletOrLarger ? 'order-1' : ''}`}
        variants={{
          ...(reverse ? slideInFromRightVariants : slideInFromLeftVariants),
          staggerChildren: 1,
        }}
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation when in view
      >
        <motion.img src={image} alt="image" className="md:w-full" />
      </motion.div>
      <motion.div
        className="md:basis-5/12"
        variants={reverse ? slideInFromLeftVariants : slideInFromRightVariants}
      >
        {textItems.map((item, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'} // Trigger animation when in view
            custom={index} // Pass the index as a custom prop for lineVariants
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sample;
