import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ContentWrapper from "../components/ContentWrapper";

const Projects = () => {
  return (
    <ContentWrapper>
      <Navbar />
      <div className="flex flex-grow justify-center mx-20">
        <div>My Projects</div>
      </div>
    </ContentWrapper>
  );
};

export default Projects;
