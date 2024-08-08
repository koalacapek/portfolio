import { NavButtonProps } from "../types/types";

const NavButton = (props: NavButtonProps) => {
  return (
    <nav>
      <p
        className={`bg-transparent border-none cursor-pointer transition duration-300 ease-in-out text-lg ${
          props.text === props.active ? "font-bold" : ""
        } hover:font-bold hover:scale-110`}
      >
        <a href={`#${props.link}`}>{props.text}</a>
      </p>
    </nav>
  );
};

export default NavButton;
