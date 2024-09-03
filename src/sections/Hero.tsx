import MyResumeButton from "../components/MyResumeButton";
import "./about.css";
import ScrollAnimation from "../components/ScrollAnimation";
import { useSectionInView } from "../hooks/useSectionInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import { GlobeDemo } from "../components/Globe/GlobeDemo";
import { Spotlight } from "../components/ui/Spotlight";

const Hero = () => {
  const { ref } = useSectionInView("Home");

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
    <section id="home" ref={ref}>
      <div className="flex flex-col items-center h-screen w-screen relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex items-center justify-center w-full h-full">
          {/* <div className="w-1/2">
            <GlobeDemo />
          </div> */}
          <div className="flex flex-col w-8/12 items-center justify-center">
            <Fade direction="down">
              <div>
                <h1 className="text-9xl mb-8">
                  Hello! <span className="font-bold">I'm Hans</span>
                </h1>
              </div>

              <div className="border border-white bg-white rounded-md mt-5 mb-12 px-28" />
            </Fade>

            <Fade direction="up">
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl font-bold mb-6">FRONTEND DEVELOPER</p>

                <div className="my-8">
                  <MyResumeButton />
                  <div className="pt-9 flex flex-row justify-center gap-x-6">
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
