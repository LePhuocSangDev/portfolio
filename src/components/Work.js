import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { projects } from "../data";
import AnimationPage from "../animation/AnimationPage";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const currentProject = projects[0];
  const lng = localStorage.getItem("lng");
  const [projectDetails, setProjectDetails] = useState({});
  const openModal = (project) => {
    setShow(true);
    setProjectDetails(project);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimationPage>
      <div>
        <div className="lg:grid lg:grid-cols-12 lg:h-[70vh]">
          <img
            className="w-full h-[50vh] lg:h-[70vh] lg:col-span-7"
            src={currentProject.imgUrl}
            alt=""
          />
          <div className="lg:col-span-5 p-12 relative ">
            <h1 className="text-4xl py-4">
              {t("Project that I currently working on")}
            </h1>
            <h3 className="text-2xl py-4 italic font-bold">
              {currentProject.name}
            </h3>
            <p className="text-md py-4 italic font-thin text-lg">
              {lng === "en" ? currentProject.desc : currentProject.desc_vn}
            </p>
          </div>
        </div>
        <div className="text-center w-screen p-4  lg:p-16">
          <h1 className="text-4xl"> {t("My project")}</h1>
          <p className="inline-block lg:w-[70%] text-justify mt-4 mb-8 text-lg">
            {t("My project description")}
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="col-span-1 relative shadow-3xl px-2 py-8 bg-[#c6c9cf] rounded-xl "
              >
                <img
                  className="w-[130px] h-[130px] rounded-[50%] m-auto"
                  src={project.imgUrl}
                  alt=""
                />
                <h2 className="my-8 text-black">{project.name}</h2>
                <p className="text-justify">{project.description}</p>
                <button
                  onClick={() => openModal(project)}
                  className="button bg-black mt-8 lg:m-0"
                >
                  {t("More Details")}
                </button>
              </div>
            ))}
          </div>
        </div>
        <Modal show={show} setShow={setShow} projectDetails={projectDetails} />
      </div>
    </AnimationPage>
  );
};

export default Work;
