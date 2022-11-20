import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { skills } from "../data";
import AnimationPage from "../animation/AnimationPage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Skills = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimationPage>
      <div className="text-center my-8 mx-8 lg:mx-16">
        <p className="text-5xl my-8 ">{t("My Skills")}</p>
        <p className="my-8 m-auto text-justify lg:w-[60%]">
          {t("Skill Description")}
        </p>

        <div className="grid  grid-cols-1 my-8 gap-4 lg:grid-cols-4 sm:grid-cols-2 text-black">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="col-span-1 my-4 shadow-2xl border-[1px] bg-[#c6c9cf] rounded-xl p-8"
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
          <p className="my-8 text-xl">{t("quote")}</p>
          <b className="text-lg">William Arthur Ward</b>
          <i className="text-5xl absolute  top-[60%] right-[-20%] lg:top-[35%] lg:right-[-10%]">
            <RiDoubleQuotesR />
          </i>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Skills;
