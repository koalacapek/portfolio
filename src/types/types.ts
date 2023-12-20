import React from "react";

export interface NavButtonProps {
  text: string;
  link: string;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarouselItemProps {
  name: string;
  img: string;
  link: string;
  desc: string;
}

export interface CardProps {
  name: string;
  desc: string;
  img: string;
  link: string;
}
