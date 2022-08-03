import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center border-t-[3px]  border-t-black">
      <div className="flex text-[40px] my-4">
        <a
          className="px-2"
          href="https://www.facebook.com/phuocsang.le.7
"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          className="px-2"
          href="https://github.com/LePhuocSangDev"
          target="_blank"
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
      <div className="font-thin text-gray-500">
        <span>phuocsangb8@gmail.com |</span>
        <span className="px-2">036-666-6390</span>
      </div>
    </div>
  );
};

export default Footer;
