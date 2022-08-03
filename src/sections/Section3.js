import React from "react";
import img1 from "../asset/image/img1.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div className="lg:grid  lg:grid-cols-12 border-bottom-black">
      <div className="lg:col-span-5  border-right-black bg-[#d6e6fe] relative h-screen lg:h-[100%]">
        <h2 className="text-center lg:mt-8 py-8">EDUCATION</h2>
        <div className="text-center w-[50%] absolute center-div">
          <p className="text-3xl mb-8">
            Ho Chi Minh City University of Technology and Education
          </p>
          <p className="text-xl ">Date (ex: Sep 2015 - March 2018)</p>
        </div>
      </div>
      <img
        src={img1}
        className="col-span-4 border-right-black h-full hidden lg:block"
      ></img>
      <div className="lg:col-span-3 h-screen lg:h-[100%] text-white bg-black font-thin relative ">
        <h2 className="text-center py-8">SKILLS</h2>
        <ul className="text-xl ml-4 mt-8">
          <li className="flex py-6 ">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            React
          </li>
          <li className="flex py-6 ">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Node Js
          </li>
          <li className="flex py-6 ">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Express
          </li>
          <li className="flex py-6 ">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            MongoDb
          </li>
        </ul>
        <Link className="bg-[#6E6E6E] button button-position" to="skills">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Section3;
