import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import MyResumeButton from "../components/MyResumeButton";
import ContentWrapper from "../components/ContentWrapper";

const Home = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-grow items-center mx-20">
        <div className="space-y-6 w-5/12">
          <p className="text-lg">UNSW Computer Science Student</p>
          <p className="text-5xl font-bold">Hans Kristian Reynaldi</p>
          <p className="text-lg">
            I'm a highly motivated final-year Computer Science student at the
            University of New South Wales, Passionate about leveraging
            technology to solve real-world problems, I have honed my skills
            through a combination of rigorous academic coursework and hands-on
            project experience.
          </p>
          {/* <MyResumeButton /> */}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
