import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ContentWrapper from "../components/ContentWrapper";
import Carousel from "../components/Carousel";

const Projects = () => {
  return (
    <div className="flex flex-grow justify-center mx-20 h-screen" id="projects">
      <div>My Projects</div>
      <Carousel />
    </div>
  );
};

export default Projects;
