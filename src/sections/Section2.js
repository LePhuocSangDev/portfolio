import React, { useEffect, useState, useRef } from "react";
import img2 from "../asset/image/sections/img2.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { useTranslation } from "react-i18next";
let count = 0;
let slideInterval;

const Section2 = () => {
  const { t } = useTranslation();
  const slideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  });
  const startSlider = () => {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const nextSlide = () => {
    count = (count + 1) % projects.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const prevSlide = () => {
    count = (count + projects.length - 1) % projects.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div className="grid grid-cols-11 h-screen border-bottom-black text-center">
      <img
        src={img2}
        alt="/"
        className="col-span-3 border-right-black h-full hidden lg:block object-cover object-top"
      ></img>
      <div className="col-span-11 lg:col-span-5 border-right-black relative ">
        <h2 className=" mt-8">{t("Work")}</h2>
        <i
          onClick={prevSlide}
          className="absolute top-[50%] left-[10%] text-3xl cursor-pointer"
        >
          <AiOutlineArrowLeft />
        </i>
        <div ref={slideRef} className="center-div absolute">
          <h3 className="text-4xl">{projects[currentIndex].name}</h3>
          <p className="py-6">{projects[currentIndex].name}</p>
          <p>{projects[currentIndex].description}</p>
        </div>
        <i
          onClick={nextSlide}
          className="absolute top-[50%] right-[10%] text-3xl cursor-pointer"
        >
          <AiOutlineArrowRight />
        </i>
        <Link to="/work" className="button bg-black button-position">
          {t("See more")}
        </Link>
      </div>
      <div className="lg:col-span-3 h-full hidden lg:block">
        <img
          alt="/"
          src={projects[currentIndex].imgUrl}
          className="w-full h-full object-contain"
        ></img>
      </div>
    </div>
  );
};

export default Section2;
