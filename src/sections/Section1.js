import React from "react";
import img1 from "../asset/image/img1.jpg";
import { Link } from "react-router-dom";
import { Hello } from "../riveAnimation/Hello";

const Section1 = () => {
  return (
    <div className="grid grid-cols-12 h-screen border-bottom-black p-4 lg:p-0">
      <Hello />
      <div className="lg:col-span-5 col-span-12 border-right-black flex justify-center items-center relative">
        <div>
          <h1 className="text-[40px] mb-10">Hello, I'm Le Phuoc Sang</h1>
          <h3 className="text-[25px]">a front-end developer</h3>
        </div>
        <Link className="button bg-black button-position" to="/about">
          See More
        </Link>
      </div>
      <img
        className="col-span-3 h-full hidden lg:block aspect-video"
        src={img1}
        alt=""
      />
    </div>
  );
};

export default Section1;
