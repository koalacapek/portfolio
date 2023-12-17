import { NavButtonProps } from "../types/types";

const NavButton = (props: NavButtonProps) => {
  return (
    <p className="bg-transparent border-none cursor-pointer hover:underline transition duration-300 ease-in-out">
      <a href={`#${props.link}`}>{props.text}</a>
    </p>
  );
};

export default NavButton;
