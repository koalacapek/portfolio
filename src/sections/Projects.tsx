import "./about.css";
import ProjectCard from "../components/ProjectCard";
import { useSectionInView } from "../hooks/useSectionInView";
import { Fade } from "react-awesome-reveal";

import dues from "../assets/dues.png";
import hobbifyphone from "../assets/hobbifyphone.png";
import mentalaquarium from "../assets/mentalaquarium.png";
import comingsoon from "../assets/comingsoon.png";

const Projects = () => {
  const projects = [
    {
      name: "Dues",
      desc: "NextJS  Typescript  Firebase",
      img: dues,
      link: "https://dues-deploy.vercel.app/",
      title: "Try me!",
    },
    {
      name: "Hobbify",
      desc: "React Native  Firebase",
      img: hobbifyphone,
      link: "https://github.com/NE1NN/hobbify",
      title: "Click me!",
    },
    {
      name: "MentalAquarium",
      desc: "ReactJS  Typescript  Docker  Prisma  NodeJS  DigitalOcean",
      img: mentalaquarium,
      link: "https://github.com/KevinSutandi/devsoc-hackathon",
      title: "Click me!",
    },
    {
      name: "Coming soon!",
      desc: "Coming soon!",
      img: comingsoon,
      link: "https://www.youtube.com/shorts/SXHMnicI6Pg",
      title: "If you insist...",
    },
  ];

  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref}>
      <Fade
        duration={2000}
        className="flex h-screen w-screen justify-center items-center"
      >
        <div className="w-10/12 h-full">
          <div className="flex flex-col h-full items-center justify-center gap-y-5 mx-28 pt-10">
            <h1 className="pb-10 text-center font-bold text-4xl">
              My Projects
            </h1>
            <div className="w-full grid grid-cols-2 grid-rows-2 justify-items-center gap-y-24">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  img={project.img}
                  link={project.link}
                  desc={project.desc}
                  title={project.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
