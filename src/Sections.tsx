import Navbar from "./components/Navbar";
import { ActiveContextProvider } from "./contexts/ActiveContext";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";

const Sections = () => {
  return (
    <ActiveContextProvider>
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      <Experiences />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </ActiveContextProvider>
  );
};

export default Sections;
