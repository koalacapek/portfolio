import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import MyResumeButton from "../components/MyResumeButton";
import ContentWrapper from "../components/ContentWrapper";
import Skill from "../components/Skill";

const About = () => {
  return (
    <div className="flex h-screen" id="about">
      <div className="flex flex-grow items-center justify-center gap-10">
        <p className="text-6xl font-bold mr-20">About Me</p>
        <div className="flex flex-col items-center ">
          <div className="w-5 h-5 rounded-full bg-blue-400" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div className="space-y-6 w-5/12">
          <p className="text-5xl font-bold">
            Hi, I'm{" "}
            <span className="text-blue-400">Hans Kristian Reynaldi</span>!
          </p>
          <p className="text-lg">UNSW Computer Science Student</p>
          <p className="text-lg">
            I'm a highly motivated final-year Computer Science student at the
            University of New South Wales, Passionate about leveraging
            technology to solve real-world problems, I have honed my skills
            through a combination of rigorous academic coursework and hands-on
            project experience.
          </p>
          <MyResumeButton />
        </div>
      </div>
    </div>
  );
};

export default About;
