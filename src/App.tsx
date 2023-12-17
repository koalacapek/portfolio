import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Pages from "./Pages";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { motion } from "framer-motion";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Navbar />
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </motion.div>
  );
};

export default App;
