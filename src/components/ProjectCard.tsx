import { CardProps } from "../types/types";
import { PinContainer } from "./ui/3dPin";

const ProjectCard = (props: CardProps) => {
  return (
    <div className="h-fit w-fit flex items-center justify-center">
      <PinContainer title={props.title} href={props.link}>
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] md:w-[34rem] h-[15rem] md:h-[24rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-xl text-slate-100">
            {props.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{props.desc}</span>
          </div>
          <div className="flex justify-center items-center w-full h-4/5">
            <div className="w-full rounded-lg mt-5 h-full flex items-center justify-center">
              <img
                src={props.img}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
