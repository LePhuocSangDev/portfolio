import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center border-top-black">
      <div className="flex text-[40px] my-2">
        <a
          className="px-2"
          href="https://www.facebook.com/phuocsang.le.7
"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          className="px-2"
          href="https://github.com/LePhuocSangDev"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a className="px-2" href="/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a className="px-2" href="/" target="_blank">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="font-thin text-gray-500 pb-2">
        <span>phuocsang123@gmail.com |</span>
        <span className="px-2">0123456789</span>
      </div>
      <button
        onClick={scrollToTop}
        className="button fixed bottom-[20px] p-0 right-[5px]"
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default Footer;
