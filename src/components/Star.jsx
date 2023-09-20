import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const BlinkingStar = ({ imgSrc, styles }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const randomBlink = () => {
      // Generate a random delay before toggling the blink animation
      const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
      setTimeout(() => {
        setIsBlinking(!isBlinking);
      }, delay * 1000);
    };

    // Start the random blinking animation
    randomBlink();

    // Create a loop to keep randomBlink running indefinitely
    const interval = setInterval(randomBlink, 5000); // Change blinking every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [isBlinking]);

  return (
    <motion.img
      src={imgSrc}
      alt="Star"
      style={styles}
      animate={isBlinking ? controls : {}}
      initial={{}}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default BlinkingStar;
