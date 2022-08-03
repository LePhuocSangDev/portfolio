import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import hello from "../asset/rive/hello.riv";
import loader from "../asset/rive/loader.riv";

import React from "react";

export const Hello = () => {
  return (
    <div className="col-span-4 border-right-black h-full hidden lg:block ">
      <Rive
        src={hello}
        layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
      />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="h-screen w-screen">
      <Rive
        src={loader}
        layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
      />
    </div>
  );
};
