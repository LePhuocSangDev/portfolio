import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import AnimationPage from "../riveAnimation/AnimationPage";

const Contact = () => {
  return (
    <AnimationPage>
      <div className="relative lg:h-screen">
        <div className="bg-[url('./asset/image/img1.jpg')] bg-cover bg-center h-[50vh] w-full z-0"></div>
        <div className=" z-1 h-[60%] bg-white  flex lg:items-center p-8 lg:w-[70%] max-w-[1100px] flex-col lg:top-[50%] lg:left-[50%] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] lg:absolute lg:flex-row lg:border-b-[1px] lg:border-b-black lg:px-12">
          <div className="flex-1 mr-4">
            <h2 className="text-5xl my-4 lg:my-6">Contact Me!</h2>
            <p className="my-4">
              Please write down your name, email address and leave a message...
            </p>
            <div className="flex flex-col my-4 lg:justify-between lg:flex-row ">
              <span className="my-4 lg:my-6">
                Email <br /> <span>phuocsangb8@gmail.com</span>
              </span>
              <span className="my-4 lg:my-6">
                Phone <br /> <span>036-666-6390</span>
              </span>
            </div>
            <div className="my-4">
              <p>Social media</p>
              <div className="flex text-[25px] my-4">
                <a className="pr-2" href="/">
                  <FaFacebookF />
                </a>
                <a className="pr-2" href="/">
                  <AiFillGithub />
                </a>
                <a className="pr-2" href="/">
                  <AiFillLinkedin />
                </a>
                <a className="pr-2" href="/">
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
          </div>
          <form action="" className="flex-1 lg:ml-4">
            <div className="flex flex-col lg:flex-row">
              <label className=" lg:mr-2 mb-4  lg:mb-1">
                First Name{" "}
                <input
                  className="pl-2 border-[1px] border-black w-full  my-2 py-1 outline-none border-black border"
                  type="text"
                  placeholder="Enter first name..."
                />
              </label>

              <label className="lg:ml-2 mb-4  lg:mb-1">
                Last Name{" "}
                <input
                  className="pl-2 border-[1px] border-black w-full mt-2 py-1 outline-none border-black border"
                  type="text"
                  placeholder="Enter last name..."
                />
              </label>
            </div>
            <label>
              Email
              <input
                className="pl-2 border-[1px] border-black w-full mb-8 mt-2 py-1 lg:mb-1 outline-none border-black border"
                type="text"
                placeholder="Enter email..."
              />
            </label>

            <label>
              Message
              <textarea
                rows="4"
                className="pl-2 border-[1px] border-black w-full mb-8 mt-2 lg:mb-1 outline-none border-black border"
                placeholder="Leave your message here!"
              ></textarea>
            </label>

            <button className="button w-full bg-black">Send</button>
          </form>
        </div>
      </div>
    </AnimationPage>
  );
};

export default Contact;
