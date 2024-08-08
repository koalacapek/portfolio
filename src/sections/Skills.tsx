const Skills = () => {
  return (
    <section>
      <div className="mt-36 mx-24 h-full flex flex-col gap-y-14">
        <h1 className="text-5xl font-bold ">Skills</h1>
        <div className="flex h-3/4 justify-around">
          <div
            className="flex gap-y-8 flex-col items-center w-[45%] border-2 border-greyBorder h-[75%] rounded-3xl"
            id="skills"
          >
            <div className="mt-10 text-2xl font-bold">Frontend Development</div>
            <div className="mt-8 grid grid-cols-3 gap-y-24 gap-x-28 ">
              <img
                className="w-16 h-16"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            </div>
          </div>

          <div
            className="flex justify-center w-[45%] border-2 border-greyBorder h-[75%] rounded-3xl"
            id="skills"
          >
            <div className="mt-10 text-2xl font-bold">Backend Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
