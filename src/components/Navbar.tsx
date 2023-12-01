import { Button } from "@mui/material";
import React from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import MyResumeButton from "./MyResumeButton";

const Navbar = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/");
  };

  const handleProject = () => {
    navigate("/projects");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="flex p-7 justify-between">
      <div className="text-xl mx-12">Portfolio</div>
      <div className="flex space-x-10 text-lg mx-20">
        <NavButton text="About Me" onClick={handleAbout} />
        <NavButton text="Projects" onClick={handleProject} />
        <NavButton text="Contact" onClick={handleContact} />
        <MyResumeButton />
      </div>
    </div>
  );
};

export default Navbar;
