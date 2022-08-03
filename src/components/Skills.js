import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { skills } from "../data";
import AnimationPage from "../riveAnimation/AnimationPage";

const Skills = () => {
  return (
    <AnimationPage>
      <div className="text-center my-8 mx-8 lg:mx-16">
        <p className="text-5xl my-8 ">My Skills</p>
        <p className="my-8 m-auto text-justify lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          incidunt aut tempora unde dolore quia provident explicabo rem eum
          repudiandae, nihil aliquid autem facere ullam! Atque iure accusantium
          tenetur ducimus.
        </p>

        <div className="grid  grid-cols-1 my-8 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="col-span-1 my-4 shadow-2xl border-[1px]  p-8"
            >
              <img
                src={skill.imgUrl}
                className="w-[120px] h-[120px] rounded-md m-auto"
                alt="/"
              />
              <h2 className="mt-8">{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        <div className=" mx-auto relative my-16 w-4/5 lg:w-[60%]">
          <i className="text-5xl absolute top-[-10%] lg:left-[-10%] left-[-18%]">
            <RiDoubleQuotesL />
          </i>
          <p className="my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            suscipit architecto omnis ipsam nobis reprehenderit voluptate a
            aspernatur aut explicabo. Architecto iure veniam pariatur velit?
            Repudiandae, sapiente laboriosam! Assumenda, optio.
          </p>
          <b>Unknown</b>
          <i className="text-5xl absolute  top-[60%] right-[-20%] lg:top-[35%] lg:right-[-10%]">
            <RiDoubleQuotesR />
          </i>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Skills;
