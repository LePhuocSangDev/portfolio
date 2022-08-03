import React, { useState } from "react";
import img1 from "../asset/image/img1.jpg";
import Modal from "./Modal";
import { projects } from "../data";
import AnimationPage from "../riveAnimation/AnimationPage";

const Work = () => {
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(true);
  };
  return (
    <AnimationPage>
      <div>
        <div className="lg:grid lg:grid-cols-12 lg:h-screen">
          <img
            className="w-full h-[50vh] lg:h-screen lg:col-span-7"
            src={img1}
            alt=""
          />
          <div className="lg:col-span-5 p-16 relative ">
            <h1 className="text-4xl py-4">
              Project that I currently working on
            </h1>
            <h3 className="text-2xl py-4 italic font-extrabold">
              Netflix Clone
            </h3>
            <p className="text-md py-4 italic font-thin text-lg">
              Subscribe to our newsletter to receive news and updates.{" "}
            </p>{" "}
            <button
              onClick={open}
              className="button bg-black button-position my-8"
            >
              See More
            </button>
          </div>
        </div>
        <div className="text-center w-screen p-8  lg:p-16">
          <h1 className="text-4xl my-8">My Projects</h1>
          <p className="inline-block lg:w-[50%] mt-8 mb-16 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nobis explicabo reiciendis? Molestias labore assumenda eum est
            asperiores. Aperiam, dolor?
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="col-span-1 relative shadow-2xl py-8 "
              >
                <img
                  className="w-[130px] h-[130px] rounded-[50%] m-auto"
                  src={project.imgUrl}
                  alt=""
                />
                <h2 className="my-8">{project.name}</h2>
                <p className="text-justify">{project.description}</p>
                <button onClick={open} className="button bg-black mt-8">
                  More details
                </button>
              </div>
            ))}
          </div>
        </div>
        <Modal show={show} setShow={setShow} />
      </div>
    </AnimationPage>
  );
};

export default Work;
