import React, { useRef, useState } from "react";
import logo from "../asset/image/logo.PNG";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const lng = localStorage.getItem("lng");

  const handleMenu = () => {
    setShowMenu(true);
  };
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const checkboxRef = useRef();
  const html = document.querySelector("html");
  const toggleDarkMode = function () {
    checkboxRef.current.checked
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  };
  return (
    <div
      className={`flex h-[80px] bg-white dark:bg-black border-bottom-black text-[20px] justify-end  lg:justify-between sticky top-0 left-0 right-0  z-10 border-top-black`}
    >
      <Link className="max-w-xs w-[20vw] hidden lg:block" to="/">
        <img className=" h-full border-right-black w-full" src={logo} alt="" />{" "}
      </Link>
      <div className="flex">
        <ul className="justify-evenly items-center hidden lg:flex">
          <li className={`p-4 hover:opacity-30`}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-black dark:border-b-white border-b-[1px] py-2 px-1"
                  : ""
              }
              to="/"
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="p-4 hover:opacity-30">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-black dark:border-b-white border-b-[1px] py-2 px-1"
                  : ""
              }
              to="/about"
            >
              {t("About")}
            </NavLink>
          </li>
          <li className="p-4 hover:opacity-30">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-black dark:border-b-white border-b-[1px] py-2 px-1"
                  : ""
              }
              to="/work"
            >
              {t("Work")}
            </NavLink>
          </li>
          <li className="p-4 hover:opacity-30">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-black dark:border-b-white border-b-[1px] py-2 px-1"
                  : ""
              }
              to="/skills"
            >
              {t("Skills")}
            </NavLink>
          </li>
          <li className="p-4 hover:opacity-30">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-black dark:border-b-white border-b-[1px] py-2 px-1"
                  : ""
              }
              to="/contact"
            >
              {t("Contact")}
            </NavLink>
          </li>
        </ul>
        {showMenu || (
          <>
            <div className="flex justify-end items-center space-x-2 mx-auto relative mr-4">
              <span className="text-md font-extralight">
                <BsSun />{" "}
              </span>
              <div>
                <input
                  ref={checkboxRef}
                  onClick={toggleDarkMode}
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className="hidden"
                />
                <label htmlFor="checkbox" className="cursor-pointer">
                  <div className="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
                    <div className="w-4 h-4 bg-white rounded-full shadow ball"></div>
                  </div>
                </label>
              </div>
              <span className="text-md font-semibold">
                <BsMoon />
              </span>
            </div>

            <select
              defaultValue={lng}
              className="bg-transparent cursor-pointer text-sm outline-none"
              onChange={(e) => handleChangeLng(e.target.value)}
            >
              <option className="dark:text-black" value="en">
                {t("English")}
              </option>
              <option className="dark:text-black" value="vn">
                {" "}
                {t("Vietnamese")}
              </option>
            </select>
          </>
        )}
      </div>

      {/*  mobile device */}

      {!showMenu && (
        <a
          className="h-full flex items-center justify-center text-4xl px-4 hover:opacity-80 cursor-pointer lg:hidden"
          href="#menu"
          onClick={handleMenu}
        >
          <AiOutlineMenu />
        </a>
      )}
      {showMenu && (
        <div className="flex h-screen z-10 w-screen bg-slate-500 relative sm:text-4xl">
          <ul className="w-full text-center mt-16">
            <li className="lg:py-4  lg:px-4 py-8 hover:bg-slate-300">
              <NavLink
                className="w-full h-full block"
                onClick={() => setShowMenu(false)}
                to="/"
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <NavLink
                className="w-full h-full block"
                onClick={() => setShowMenu(false)}
                to="/about"
              >
                {t("About")}
              </NavLink>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <NavLink
                className="w-full h-full block"
                onClick={() => setShowMenu(false)}
                to="/work"
              >
                {t("Work")}
              </NavLink>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <NavLink
                className="w-full h-full block"
                onClick={() => setShowMenu(false)}
                to="/skills"
              >
                {t("Skills")}
              </NavLink>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <NavLink
                className="w-full h-full block"
                onClick={() => setShowMenu(false)}
                to="/contact"
              >
                {t("Contact")}
              </NavLink>
            </li>
          </ul>
          <button
            className="absolute top-0 right-0 p-2 bg-black text-white text-xl hover:bg-slate-300 hover:text-black border-none"
            onClick={() => setShowMenu(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
