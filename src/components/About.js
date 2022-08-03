import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import mypicture from "../asset/image/mypicture.jpg";
import AnimationPage from "../riveAnimation/AnimationPage";

const About = () => {
  return (
    <AnimationPage>
      <div className="p-8 lg:p-16">
        <div>
          <h3 className="text-6xl mb-4 text-center">BIO</h3>
          <h4 className="text-center">Personal Life</h4>
          <div className="flex flex-col mt-12 mb-24 lg:flex-row items-center ">
            <img
              className="w-full max-w-[500px] lg:w-full lg:h-[300px] lg:ml-8 xl:ml-32"
              src={mypicture}
              alt=""
            />
            <div className=" lg:w-[600px] text-justify  relative lg:mx-12">
              <p className="mt-8 lg:mt-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus perspiciatis obcaecati, nihil recusandae totam, corrupti
                voluptates deserunt dicta temporibus saepe nostrum. Dolor
                deleniti maxime vitae?
              </p>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                aliquam dolor, dolorum dolore corporis doloribus recusandae
                pariatur debitis, tempore itaque quo magni vero odit cumque!
              </p>
              <a
                href="#"
                className="bg-[#5A7A81] inline-flex justify-center items-center px-4 py-2 text-white my-2 w-full lg:justify-between lg:w-[180px] mt-8"
              >
                Download CV{" "}
                <i className="ml-2">
                  <AiOutlineArrowDown />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-4 text-4xl">Education</div>
          <div className="my-4 flex flex-col lg:col-span-3 lg:my-0 lg:px-4">
            <span>2015-2018</span>
            <span>
              {" "}
              Ho Chi Minh City University of Technology and Education
            </span>
          </div>
          <div className="lg:col-span-5 lg:px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            minima perferendis hic animi ex quidem commodi sint autem magnam
            similique.
          </div>
        </div>

        <div className="hidden lg:block absolute h-[130px] bg-blue-900 w-[1px] top-[96%] right-[43%]"></div>
      </div>
    </AnimationPage>
  );
};

export default About;
