import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { motion } from "framer-motion";
import Skills from "./sections/Skills";
import { ActiveContextProvider } from "./contexts/ActiveContext";

const App = () => {
  return (
    <ActiveContextProvider>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ActiveContextProvider>
  );
};

export default App;
