import { Button } from "@mui/material";
import React, { useRef } from "react";
import NavButton from "./NavButton";
import { useLocation, useNavigate } from "react-router-dom";
import MyResumeButton from "./MyResumeButton";

const Navbar = () => {
  return (
    <div className="flex p-7 fixed w-full justify-between">
      <div className="text-xl mx-12">Portfolio</div>
      <div className="flex space-x-10 text-lg mx-20 right-0">
        <NavButton link="about" text="About Me" />
        <NavButton link="projects" text="Projects" />
        <NavButton link="contact" text="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
