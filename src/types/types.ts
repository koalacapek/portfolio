// eslint-disable
import React, { MouseEventHandler } from "react";

export interface NavButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface CarouselItemProps {
  name: string;
  img: string;
  link: string;
}
