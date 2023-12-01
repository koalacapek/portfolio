import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import { AnimatePresence } from "framer-motion";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

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
