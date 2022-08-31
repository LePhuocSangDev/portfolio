import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:grid  lg:grid-cols-12 border-bottom-black lg:h-screen">
      <div className="lg:col-span-5  border-right-black bg-[#d6e6fe] relative h-screen lg:h-[100%] text-black">
        <h2 className="text-center lg:mt-8 py-8">{t("EDUCATION")}</h2>
        <div className="text-center w-[50%] absolute center-div">
          <p className="text-3xl mb-8">{t("school")}</p>
          <p className="text-xl ">{t("date study")}</p>
        </div>
      </div>
      <img
        alt="/"
        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        className="col-span-4 border-right-black h-full hidden lg:block"
      ></img>
      <div className="lg:col-span-3 h-screen lg:h-[100%] text-white bg-black font-thin relative ">
        <h2 className="text-center py-8">{t("Skills")}</h2>
        <ul className="text-xl ml-4 mt-8 lg:mt-0">
          <li className="flex py-6 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            React
          </li>
          <li className="flex py-6 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Node Js
          </li>
          <li className="flex py-6 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Express
          </li>
          <li className="flex py-6 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            MongoDb
          </li>
        </ul>
        <Link className="bg-[#6E6E6E] button button-position" to="skills">
          {t("See more")}
        </Link>
      </div>
    </div>
  );
};

export default Section3;
