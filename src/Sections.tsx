import Navbar from "./components/Navbar";
import { ActiveContextProvider } from "./contexts/ActiveContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Sections = () => {
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

export default Sections;
