import { NavButtonProps } from "../types/types";
import clsx from "clsx";

const NavButton = (props: NavButtonProps) => {
  return (
    <nav>
      <p
        className={clsx(
          "bg-transparent border-none cursor-pointer hover:font-bold transition duration-300 ease-in-out",
          {
            "font-bold": props.text === props.active,
          }
        )}
      >
        <a href={`#${props.link}`}>{props.text}</a>
      </p>
      {/* {props.text === props.active && (
        <motion.span
          className="bg-gray-100 rounded-full w-full absolute inset-0 -z-10 dark:bg-gray-800"
          layoutId="activeSection"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        ></motion.span>
      )} */}
    </nav>
  );
};

export default NavButton;
