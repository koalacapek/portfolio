import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html from "../icons/html-icon.svg";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Skill = ({ text }: { text: string }) => {
  return (
    <div className="border-2 rounded-full p-3 w-max flex items-center space-x-2">
      <FontAwesomeIcon icon={faHtml5} size="xl" style={{ color: "#e44d26" }} />
      <span>{text}</span>
    </div>
  );
};

export default Skill;
