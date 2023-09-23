/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const StarBlink = ({ image, styles }) => {
  const randomDelay = Math.random() * 2 + 1; // Random delay between 0 and 1
  const randomDuration = Math.random() * 2 + 1; // Random duration between 0 and 1

  return (
    <motion.img
      src={image}
      alt="Star"
      className={`absolute ${styles}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: randomDuration, // Set a unique duration for each instance
        delay: randomDelay, // Set a unique delay for each instance
        repeatType: "loop",
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default StarBlink;
