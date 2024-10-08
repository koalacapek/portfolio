import { motion } from "framer-motion";
import mouse from "../assets/scroll.png";

const ScrollAnimation = () => {
  const scrollVariant = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  return (
    <div>
      <motion.img
        className="w-[50px]"
        variants={scrollVariant}
        animate="scrollButton"
        src={mouse}
        alt=""
      />
    </div>
  );
};

export default ScrollAnimation;
