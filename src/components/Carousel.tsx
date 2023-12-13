import React from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const projects = [
    {
      name: "dues",
      img: "",
      link: "",
    },
  ];

  const renderItems = () => {
    projects.map((project, index) => (
      <CarouselItem
        key={index}
        name={project.name}
        img={project.img}
        link={project.link}
      />
    ));
  };

  return <div>asu</div>;
};

export default Carousel;
