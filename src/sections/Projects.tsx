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
      <div className="flex h-fit w-screen justify-center items-center pb-20 md:pb-20">
        <div className="w-10/12 h-full">
          <div className="flex flex-col h-full items-center justify-center gap-y-5 lg:gap-y-20 mx-5 lg:mx-28">
            <Fade direction="down" triggerOnce>
              <h1 className="text-center font-bold text-4xl lg:text-5xl pt-10 lg:pt-40 xl:pt-16 pb-10 lg:pb-0">
                My Projects
              </h1>
            </Fade>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-x-80 2xl:gap-x-36 justify-items-center gap-y-32 lg:gap-y-28">
              <Fade direction="up" triggerOnce>
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
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
