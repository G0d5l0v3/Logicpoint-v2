import React from "react";
import ImageComponent from "../../../components/imageComponent/ImageComponent"

const About = () => {
  return (
    <div className="bg-[#fcfafc]">
      <div className="px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto] ">
        <h1 className="font-[exo] text-[#181830] text-3xl sm:text-4xl lg:whitespace-normal lg:text-5xl font-semibold leading-tight">
          <span>
          Committed to  {" "}
            <span className="text-[#E87B37]">elevating your business </span>{" "}
            through{" "}
          </span>
          <br />
          <span>step-by-step collaborations</span>
        </h1>
     
        
      </div>
    </div>
  );
};

export default About;
