import React from "react";

const Modal = ({ show, setShow }) => {
  const close = () => {
    setShow(false);
  };

  return (
    <div
      onClick={close}
      className={`fixed top-0 left-0 bg-[#000000e1] w-screen h-screen justify-center items-center ${
        show ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[10px] w-[80%] h-[85%] lg:w-[85%] lg:h-[80%] relative px-4"
      >
        <button
          onClick={close}
          className="button bg-black absolute top-0 right-0"
        >
          X
        </button>
        <div>
          <h4 className="text-center text-2xl mt-12 mb-8">Tinyzone-clone</h4>
          <div className="md:my-12">
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-1">Description:</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, nesciunt.
              </span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-1">Technologies:</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, nesciunt.
              </span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-1">Main features:</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, nesciunt.
              </span>
            </div>
            <div className="py-2 sm:py-4 sm:text-xl">
              <span className="font-extrabold pr-1">Member:</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, nesciunt.
              </span>
            </div>
          </div>
        </div>
        <a className="button bg-black absolute top-[90%] left-[5%]">Demo</a>
        <a className="button bg-black absolute top-[90%] right-[5%]">
          Source code
        </a>
      </div>
    </div>
  );
};

export default Modal;
