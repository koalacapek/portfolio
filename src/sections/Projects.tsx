import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ContentWrapper from "../components/ContentWrapper";
import Carousel from "../components/Carousel";
import "./about.css";

const Projects = () => {
  return (
    <div
      className="flex flex-grow justify-center main-content pt-[84px]"
      id="projects"
    >
      <div>My Projects</div>
      <Carousel />
    </div>
  );
};

export default Projects;
