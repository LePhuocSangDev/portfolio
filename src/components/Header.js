import React, { useEffect, useState } from "react";
import logo from "../asset/image/logo.PNG";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(true);
  };

  return (
    <div
      className={`flex h-[80px] border-bottom-black text-[20px] justify-end  lg:justify-between sticky top-0 left-0 right-0  z-10 border-top-black bg-white`}
    >
      <Link className="max-w-xs w-[20vw] hidden lg:block" to="/">
        <img className=" h-full border-right-black w-full" src={logo} alt="" />{" "}
      </Link>
      <ul className="justify-evenly items-center hidden lg:flex">
        <li className="p-4 hover:opacity-30">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:opacity-30">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 hover:opacity-30">
          <Link to="/work">Work</Link>
        </li>
        <li className="p-4 hover:opacity-30">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="p-4 hover:opacity-30">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/*  mobile device */}

      {!showMenu && (
        <a
          className="h-full flex items-center justify-center text-4xl px-4 hover:opacity-80 cursor-pointer lg:hidden"
          href="#"
          onClick={handleMenu}
        >
          <AiOutlineMenu />
        </a>
      )}
      {showMenu && (
        <div className="justify-center items-center flex h-screen z-10 w-full bg-slate-500 relative sm:text-4xl">
          <ul className="w-full text-center">
            <li className="lg:py-4  lg:px-4 py-8 hover:bg-slate-300">
              <Link onClick={() => setShowMenu(false)} to="/">
                Home
              </Link>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <Link onClick={() => setShowMenu(false)} to="/about">
                About
              </Link>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <Link onClick={() => setShowMenu(false)} to="/work">
                Work
              </Link>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <Link onClick={() => setShowMenu(false)} to="/skills">
                Skills
              </Link>
            </li>
            <li className="lg:py-4 lg:px-4 py-8 hover:bg-slate-300">
              <Link onClick={() => setShowMenu(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="absolute top-0 right-0 p-4 bg-black text-white text-2xl hover:bg-slate-300 hover:text-black border-none"
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
