import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { motion, useInView } from "framer-motion";
import MyResumeButton from "../components/MyResumeButton";
import ContentWrapper from "../components/ContentWrapper";
import Skill from "../components/Skill";
import "./about.css";
import ScrollAnimation from "../components/ScrollAnimation";

const About = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
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
    <motion.div
      className="flex h-full flex-col items-center"
      variants={textVariants}
      initial="initial"
      animate="animate"
      id="about"
    >
      <div className="flex flex-grow items-center justify-center gap-10 pt-[84px]">
        <motion.p className="text-6xl font-bold mr-20" variants={textVariants}>
          About Me
        </motion.p>
        <motion.div
          className="flex flex-col items-center"
          variants={textVariants}
        >
          <div className="w-5 h-5 rounded-full bg-blue-400" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </motion.div>
        <motion.div className="space-y-6 w-5/12 mb-5" variants={textVariants}>
          <p className="text-5xl font-bold">
            Hi, I'm <span className="text-blue-400">Hans</span>!
          </p>
          {/* <motion.p className="text-lg" variants={textVariants}>
            I'm a final year Computer Science Student at UNSW
          </motion.p> */}
          <motion.p className="text-lg" variants={textVariants}>
            I'm a highly motivated final-year Computer Science student at the
            University of New South Wales, Passionate about leveraging
            technology to solve real-world problems, I have honed my skills
            through a combination of rigorous academic coursework and hands-on
            project experience.
          </motion.p>
          <motion.div variants={textVariants}>
            <MyResumeButton />
          </motion.div>
        </motion.div>
      </div>
      <div className="pb-20">
        <ScrollAnimation />
      </div>
    </motion.div>
  );
};

export default About;
