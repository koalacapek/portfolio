import React from "react";
import { CarouselItemProps } from "../types/types";

const CarouselItem = (props: CarouselItemProps) => {
  const handleRedirect = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div>
      <div className="shadow slide-item transition-all flex flex-col space-y-6 items-center justify-center">
        <img
          src={props.img}
          className="object-cover h-48 rounded"
          onClick={handleRedirect}
        />
        <div>{props.name}</div>
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default CarouselItem;
