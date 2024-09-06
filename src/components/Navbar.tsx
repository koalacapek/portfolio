import NavButton from "./NavButton";
import { useActiveContext } from "../contexts/ActiveContext";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      link: "home",
      text: "Home",
    },
    {
      link: "experiences",
      text: "Experiences",
    },
    {
      link: "projects",
      text: "Projects",
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const atTop = window.scrollY < 50;

        setIsTop(atTop);

        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const { active, setActive, setTimeOfLastClick } = useActiveContext();

  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col w-full md:mt-10 xl:mt-14 md:w-fit fixed py-5 px-4 md:px-14 md:shadow-xl md:border-2 md:border-greyBorder md:bg-black md:fixed z-10 rounded-full duration-300 transition-all ${
          !visible && "md:-translate-y-[185%]"
        }`}
      >
        <div
          className={`w-full flex justify-end md:hidden ${
            isMenuOpen && "flex-col items-end"
          }`}
        >
          <button
            className="text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row justify-end items-end space-x-14 text-lg md:justify-center w-full md:w-auto`}
        >
          <Fade cascade damping={0.1} triggerOnce>
            {links.map((link, key) => (
              <NavButton
                key={key}
                link={link.link}
                text={link.text}
                setTimeOfLastClick={setTimeOfLastClick}
                active={active}
                setActive={setActive}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
