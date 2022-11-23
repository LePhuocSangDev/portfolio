import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img2 from "../asset/image/sections/img2.jpg";

const Section3 = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:grid lg:grid-cols-12 border-bottom-black lg:h-full">
      <div className="lg:col-span-5  border-right-black bg-[#d6e6fe] relative h-screen lg:h-[100%] text-black">
        <h2 className="text-center lg:mt-8 py-8">{t("EDUCATION")}</h2>
        <div className="text-center w-[50%] absolute center-div">
          <p className="text-3xl mb-8">{t("school")}</p>
          <p className="text-xl ">{t("date study")}</p>
        </div>
      </div>
      <img
        alt="/"
        src={img2}
        className="col-span-4 border-right-black object-cover h-full hidden lg:block"
      ></img>
      <div className="lg:col-span-3 lg:h-screen text-white bg-black font-thin relative lg:p-4">
        <h2 className="text-center pt-4 pb-2">{t("Skills")}</h2>
        <ul className="text-xl ml-4 mt-4 lg:mt-0">
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            React
          </li>
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Node Js
          </li>
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            Express
          </li>
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            TailWind Css
          </li>
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            SASS
          </li>
          <li className="flex py-4 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            HTML
          </li>
          <li className="flex py-6 lg:py-4">
            <i className="mr-4 p-1 rounded-[50%] border-[1px] border-white border-solid">
              <AiOutlineCheck />
            </i>
            CSS
          </li>
        </ul>
        <Link
          className="bg-[#6E6E6E] button button-position hidden lg:block"
          to="skills"
        >
          {t("See more")}
        </Link>
      </div>
    </div>
  );
};

export default Section3;
