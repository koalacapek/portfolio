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
        <p className="bg-transparent border-none cursor-pointer hover:underline transition duration-300 ease-in-out">
          <a href="#about">About Me</a>
        </p>
        <p className="bg-transparent border-none cursor-pointer hover:underline transition duration-300 ease-in-out">
          <a href="#projects">Projects</a>
        </p>
        <p className="bg-transparent border-none cursor-pointer hover:underline transition duration-300 ease-in-out">
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
