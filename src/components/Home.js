import React from "react";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import AnimationPage from "../animation/AnimationPage";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimationPage>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </AnimationPage>
  );
};

export default Home;
