import MyResumeButton from "../components/MyResumeButton";
import "./about.css";
import ScrollAnimation from "../components/ScrollAnimation";
import { useSectionInView } from "../hooks/useSectionInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import { GlobeDemo } from "../components/Globe/GlobeDemo";

const Hero = () => {
  const { ref } = useSectionInView("About");

  const handleGithub = () => {
    window.open(
      "https://github.com/koalacapek",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleLinkedin = () => {
    window.open(
      "www.linkedin.com/in/hans-kristian-reynaldi",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="about" ref={ref}>
      <div className="flex flex-col items-center flex-1 h-screen w-screen relative">
        <div className="flex items-center h-full">
          <div className="w-1/2">
            <GlobeDemo />
            {/* <img
                src="/1722425039634zgazn525.webp"
                alt="Description"
                className="h-full w-full object-cover"
              /> */}
          </div>
          <div className="flex flex-col w-1/2 pr-20">
            <Fade direction="down">
              <div>
                <p className="text-6xl mb-8">Hello!</p>
                <p className="text-6xl font-bold">I'm Hans Kristian Reynaldi</p>
              </div>

              <div className="w-[15%] border border-white bg-white rounded-md my-12" />
            </Fade>

            <Fade direction="up">
              <p className="text-3xl font-bold mb-6">FRONTEND DEVELOPER</p>
              <p className="text-lg">
                I'm a highly motivated final-year Computer Science student at
                the University of New South Wales, Passionate about leveraging
                technology to solve real-world problems, I have honed my skills
                through a combination of rigorous academic coursework and
                hands-on project experience.
              </p>
              <div className="my-8">
                <MyResumeButton />
                <div className="pt-9 flex flex-row gap-x-6">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    onClick={handleGithub}
                    className="hover:cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    onClick={handleLinkedin}
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2">
          <ScrollAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;
