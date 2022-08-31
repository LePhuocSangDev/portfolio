import React from "react";
import { Link } from "react-router-dom";
import img2 from "../asset/image/sections/img2.jpg";
import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 h-screen ">
      <img
        src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60"
        alt="/"
        className="col-span-4 border-right-black h-full hidden lg:block"
      ></img>
      <div className="col-span-12 lg:col-span-4 border-right-black text-center relative">
        <h2 className="mt-8">{t("CONTACT ME")}</h2>
        <p className="text-2xl absolute center-div">{t("get in touch")}</p>
        <Link className="bg-black button button-position" to="/contact">
          {t("See more")}
        </Link>
      </div>
      <img
        src={img2}
        alt="/"
        className="col-span-4 h-full hidden lg:block"
      ></img>
    </div>
  );
};

export default Section4;
