import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./sections/About";
import { AnimatePresence } from "framer-motion";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Pages = () => {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default Pages;
