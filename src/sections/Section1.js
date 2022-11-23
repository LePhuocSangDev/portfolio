import React from "react";
import { Link } from "react-router-dom";
import { Hello } from "../animation/RiveAnimation";
import { useTranslation } from "react-i18next";
import welcome from "../asset/image/sections/welcome.jpg";

const Section1 = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-black grid grid-cols-12 h-screen border-bottom-black p-4 lg:p-0">
      <Hello />
      <div className="lg:col-span-5 col-span-12 border-right-black flex justify-center items-center relative pl-4">
        <div>
          <h1 className="text-[40px] mb-10">{t("introduce name")}</h1>
          <h3 className="text-[25px]">
            <span className="">{t("job")}</span>
          </h3>
        </div>
        <Link
          className="button bg-black button-position shadow-[0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3]"
          to="/about"
        >
          {t("See more")}
        </Link>
      </div>
      <img
        className="col-span-3 h-full hidden lg:block object-cover"
        src={welcome}
        alt=""
      />
    </div>
  );
};

export default Section1;
