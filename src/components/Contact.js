import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import AnimationPage from "../animation/AnimationPage";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const [SendStatus, setSendStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );
    setSendStatus("success");
    e.target.reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimationPage>
      <div className="relative lg:h-screen">
        <div className="bg-[url('./asset/image/img1.jpg')] bg-cover bg-center h-[50vh] w-full z-0"></div>
        <div className=" z-1 h-[60%] dark:bg-black bg-white flex lg:items-center p-8 lg:w-[70%] max-w-[1100px] flex-col lg:top-[50%] lg:left-[50%] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] lg:absolute lg:flex-row lg:border-b-[1px] lg:border-b-black lg:p-12 lg:h-auto dark:border-[2px] dark:border-white">
          {SendStatus ? (
            <div className="text-center text-xl w-full text-green-600">
              {t("Thank You For Sending a Message!")}
            </div>
          ) : (
            <>
              <div className="flex-1 mr-4">
                <h2 className="text-5xl my-4 lg:my-6">{t("Contact Me!")}</h2>
                <p className="my-4">
                  {t(
                    "Please write down your name, email address and leave a message..."
                  )}
                </p>
                <div className="flex flex-col my-4 lg:justify-between lg:flex-row ">
                  <span className="my-4 lg:my-6">
                    Email <br /> <span>phuocsang123@gmail.com</span>
                  </span>
                  <span className="my-4 lg:my-6">
                    {t("Phone")} <br /> <span>0123468731</span>
                  </span>
                </div>
                <div className="my-4">
                  <p>{t("Social media")}</p>
                  <div className="flex text-[25px] my-4">
                    <a className="pr-2" href="/">
                      <FaFacebookF />
                    </a>
                    <a className="pr-2" href="/">
                      <AiFillGithub />
                    </a>
                    <a className="pr-2" href="/">
                      <AiFillLinkedin />
                    </a>
                    <a className="pr-2" href="/">
                      <AiOutlineTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex-1 lg:ml-4"
              >
                <div className="flex flex-col lg:flex-row">
                  <label className=" lg:mr-2 mb-4  lg:mb-1">
                    {t("First Name")}
                    <input
                      className="peer pl-2 border-[1px] border-black w-full  my-2 py-1 outline-none "
                      type="text"
                      required
                      name="first name"
                      placeholder={t("Enter first name...")}
                    />
                    <span className="peer-focus:block font-thin text-sm text-red-700 hidden">
                      {t("Please enter your first name!")}
                    </span>
                  </label>

                  <label className="lg:ml-2 mb-4  lg:mb-1">
                    {t("Last Name")}
                    <input
                      className="peer pl-2 border-[1px] w-full mt-2 py-1 outline-none border-black "
                      type="text"
                      name="last name"
                      required
                      placeholder={t("Enter last name...")}
                    />
                    <span className="peer-focus:block  font-thin text-sm text-red-700 hidden">
                      {t("Please enter your last name!")}
                    </span>
                  </label>
                </div>
                <label>
                  Email
                  <input
                    className="peer pl-2 border-[1px] border-black w-full mb-8 mt-2 py-1 lg:mb-1 outline-none"
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    placeholder={t("Enter email...")}
                  />
                  <span className="peer-focus:block peer-valid:hidden font-thin text-sm text-red-700 hidden">
                    {t("Please enter your valid email address! Ex:")}

                    <span className="font-bold"> example@gmail.com</span>
                  </span>
                </label>

                <label>
                  {t("Message")}
                  <textarea
                    rows="4"
                    required
                    className="peer pl-2 border-[1px] border-black w-full mb-8 mt-2 lg:mb-1 outline-none"
                    name="message"
                    placeholder={t("Leave your message here!")}
                  ></textarea>
                  <span className="peer-focus:block font-thin text-sm text-red-700 hidden mb-2 ">
                    {t("This field cannot be empty!")}
                  </span>
                </label>

                <input
                  type="submit"
                  className="button w-full bg-black"
                  value={t("Send")}
                ></input>
              </form>
            </>
          )}
        </div>
      </div>
    </AnimationPage>
  );
};

export default Contact;
