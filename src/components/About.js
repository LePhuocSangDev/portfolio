import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import mypicture from "../asset/image/mypicture.jpg";
import AnimationPage from "../animation/AnimationPage";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <AnimationPage>
      <div className="p-8 lg:p-16">
        <div>
          <h3 className="text-6xl mb-4 text-center">BIO</h3>
          <h4 className="text-center">{t("Personal Life")}</h4>
          <div className="flex flex-col mt-12 mb-24 lg:flex-row items-center ">
            <img
              className="w-full max-w-[500px] lg:w-full lg:h-[300px] lg:ml-8 xl:ml-32"
              src={mypicture}
              alt=""
            />
            <div className=" lg:w-[600px] text-justify  relative lg:mx-12">
              <p className="mt-8 lg:mt-0">{t("about-desc")}</p>
              <p className="mt-8">{t("about-desc2")}</p>
              <a
                href="https://docs.google.com/document/d/19_NUaD0ZZKMrb_OoeirL0OJye_5HHNdg/edit?usp=sharing&ouid=114283264621852541885&rtpof=true&sd=true"
                target="_blank"
                className="bg-[#5A7A81] inline-flex justify-center items-center px-4 py-2 text-white my-2 w-full lg:justify-between lg:w-[180px] mt-8"
              >
                {t("Download CV")}
                <i className="ml-2">
                  <AiOutlineArrowDown />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-4 text-4xl">{t("Education")}</div>
          <div className="my-4 flex flex-col lg:col-span-3 lg:my-0 lg:px-4">
            <span className="text-sm">2015-2018</span>
            <span>{t("school")}</span>
          </div>
          <div className="lg:col-span-5 lg:px-4 text-lg">
            {t("school-desc")}
          </div>
        </div>
      </div>
    </AnimationPage>
  );
};

export default About;
