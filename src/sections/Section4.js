import React from "react";
import { Link } from "react-router-dom";
import img1 from "../asset/image/img1.jpg";
import img2 from "../asset/image/sections/img2.jpg";

const Section4 = () => {
  return (
    <div className="grid grid-cols-12 h-screen ">
      <img
        src={img1}
        alt="/"
        className="col-span-4 border-right-black h-full hidden lg:block"
      ></img>
      <div className="col-span-12 lg:col-span-4 border-right-black text-center relative">
        <h2 className="mt-8">CONTACT ME</h2>
        <p className="text-2xl absolute center-div">
          Get in touch with me so we can collaborate on your next project!
        </p>
        <Link className="bg-black button button-position" to="/contact">
          See more
        </Link>
      </div>
      <img src={img2} className="col-span-4 h-full hidden lg:block"></img>
    </div>
  );
};

export default Section4;
