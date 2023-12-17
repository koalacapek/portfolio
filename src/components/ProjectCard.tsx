import React from "react";
import { CardProps } from "../types/types";

const ProjectCard = (props: CardProps) => {
  const handleButtonClick = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-[45%] h-80 flex flex-col gap-4  bg-deepblue hover:shadow-md hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-[55%] object-cover"
        src={props.img}
        alt={props.name}
      />
      <div className="pl-4">
        <h3 className="text-lg font-semibold text-white mb-2">{props.name}</h3>
        <p className="text-white text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
