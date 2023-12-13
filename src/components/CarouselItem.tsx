import React from "react";
import { CarouselItemProps } from "../types/types";

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div>
      <div className="shadow slide-item transition-all">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default CarouselItem;
