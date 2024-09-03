import { CardProps } from "../types/types";
import { PinContainer } from "./ui/3dPin";

const ProjectCard = (props: CardProps) => {
  return (
    <div className="h-fit w-fit flex items-center justify-center">
      <PinContainer title={props.title} href={props.link}>
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[35rem] h-[22rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {props.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{props.desc}</span>
          </div>
          <div className="flex justify-center items-center w-full h-4/5">
            <div className="w-full rounded-lg mt-4 h-full flex items-center justify-center">
              <img
                src={props.img}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
    // <div
    //   onClick={handleButtonClick}
    //   className="rounded-lg shadow-lg overflow-hidden w-[45%] h-80 flex flex-col gap-4  bg-deepblue hover:shadow-md hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
    // >
    //   <img
    //     className="w-full h-[55%] object-cover"
    //     src={props.img}
    //     alt={props.name}
    //   />
    //   <div className="pl-4">
    //     <h3 className="text-lg font-semibold text-white mb-2">{props.name}</h3>
    //     <p className="text-white text-sm">{props.desc}</p>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
