import React from "react";

const Modal = ({ show, setShow, projectDetails }) => {
  const close = () => {
    setShow(false);
  };
  const lng = localStorage.getItem("lng");
  return (
    <div
      onClick={close}
      className={`fixed top-0 left-0 bg-[#000000e1] w-screen h-screen justify-center items-center text-black z-20 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[10px] w-[80%] h-[85%] lg:w-[85%] lg:h-[80%] relative px-4"
      >
        <button onClick={close} className="button absolute top-0 right-0">
          X
        </button>
        <div>
          <h4 className="text-center text-2xl mt-12 mb-8 lg:m-4">
            {projectDetails.name}
          </h4>
          <div className="md:my-12 lg:m-0">
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-2">Description:</span>
              <span>
                {lng === "en" ? projectDetails.desc : projectDetails.desc_vn}{" "}
              </span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-2">Technologies:</span>
              <span>{projectDetails.tech}</span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-2">Main features:</span>
              <span>{projectDetails.features}</span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-2">Member:</span>
              <span>{projectDetails.member}</span>
            </div>
          </div>
        </div>
        <a
          className="button bg-black absolute top-[90%] left-[5%]"
          href={projectDetails.linkDemo}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="button bg-black absolute top-[90%] right-[5%]"
          href={projectDetails.source}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Modal;
