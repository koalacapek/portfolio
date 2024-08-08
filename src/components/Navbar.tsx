import NavButton from "./NavButton";
import { useActiveContext } from "../contexts/ActiveContext";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const links = [
    {
      link: "about",
      text: "About",
    },
    {
      link: "projects",
      text: "Projects",
    },
    {
      link: "contact",
      text: "Contact",
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const atTop = window.scrollY < 50;

        setIsTop(atTop);

        // Hide navbar on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // if scroll down
          setVisible(false);
        } else {
          // if scroll up
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
    <div className="flex justify-center mt-8 w-full">
      <div
        className={`flex fixed w-fit border-2 py-5 px-14 shadow-xl border-greyBorder bg-white z-10 rounded-full duration-300 transition-all ${
          !visible && "-translate-y-[150%]"
        }`}
      >
        <div className="flex space-x-14 text-lg justify-center">
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
