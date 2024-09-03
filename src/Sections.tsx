import Navbar from "./components/Navbar";
import { ActiveContextProvider } from "./contexts/ActiveContext";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Sections = () => {
  return (
    <ActiveContextProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </ActiveContextProvider>
  );
};

export default Sections;
