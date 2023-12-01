import { NavButtonProps } from "../types/types";

const NavButton = (props: NavButtonProps) => {
  return (
    <button
      className="bg-transparent border-none cursor-pointer hover:underline transition duration-300 ease-in-out"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default NavButton;
