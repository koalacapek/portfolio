import MyResumeButton from "../components/MyResumeButton";
import ScrollAnimation from "../components/ScrollAnimation";
import { useSectionInView } from "../hooks/useSectionInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
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
      <div className="relative flex flex-col items-center h-screen w-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative flex flex-col w-8/12 h-full items-center justify-center">
            <Fade direction="down">
              <h1 className="md:text-9xl text-8xl mb-8 text-center">
                Hello!{" "}
                <span className="font-bold block xl:inline">I'm Hans</span>
              </h1>

              <div className="bg-white border rounded-md mt-5 mb-12 px-28" />
            </Fade>

            <Fade direction="up" className="w-full h-max border-red-500">
              <div className="w-full flex flex-col items-center text-center">
                <p className="text-3xl font-bold mb-6">
                  FRONTEND & BACKEND DEVELOPER
                </p>

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
            <div className="absolute bottom-20">
              <ScrollAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
