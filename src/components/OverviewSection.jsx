/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedSection = ({ reverse, image, textItems }) => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: reverse ? "-100%" : "100%" },
      }}
      transition={{ duration: 0.5 }}
      className={`flex items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <motion.div className="w-1/2">
        <motion.img
          src={image}
          alt="Image"
          className="max-w-full"
          initial={{
            opacity: 0,
            x: reverse ? "-100%" : "100%",
            y: 0,
          }}
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              y: [0, -10, 0], // Continuous bobbing effect (start, up, down, repeat)
            },
            hidden: {
              opacity: 0,
              x: reverse ? "-100%" : "100%",
              y: 0,
            },
          }}
          transition={{
            duration: 0.5,
            yoyo: Infinity, // Continuously repeat the animation
            ease: "easeInOut", // You can adjust the easing function
          }}
        />
      </motion.div>
      <motion.div className="w-1/2">
        {textItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={{ opacity: 0, x: reverse ? "100%" : "-100%" }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection;
