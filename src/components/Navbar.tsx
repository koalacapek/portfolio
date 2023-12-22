import NavButton from "./NavButton";
import { useActiveContext } from "../contexts/ActiveContext";

const Navbar = () => {
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

  const { active, setActive, setTimeOfLastClick } = useActiveContext();
  return (
    <div className="flex p-7 fixed w-full justify-between">
      <div className="text-xl mx-12">Portfolio</div>
      <div className="flex space-x-10 text-lg mx-20 right-0">
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
      </div>
    </div>
  );
};

export default Navbar;
