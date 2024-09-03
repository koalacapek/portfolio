import { motion } from "framer-motion";

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
        src="../assets/scroll.png"
        alt=""
      />
    </div>
  );
};

export default ScrollAnimation;
