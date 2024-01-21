import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import HeroItems from "./HeroItems";
import ImageComponent from "../../../components/imageComponent/ImageComponent";

const firstTwoItems = HeroItems.slice(0, 2);
const lastTwoItems = HeroItems.slice(2);

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between px-[1rem] py-[.2rem] lg:max-w-[1240px] lg:mx-[auto]">
        <div>
          <h1 className="pt-[3rem] font-[exo] text-[#181830] text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="lg:whitespace-nowrap">Empowering Brands </span>
            <br />
            <span className=" lg:whitespace-normal">
              With <span className="text-[#E87B37]">Seamless </span>
            </span>
            <br />
            <span class=" lg:whitespace-normal">IT Solutions</span>
          </h1>
          <p className="pt-[3rem] font-[exo] font-semibold text-[#181830] text-4xl sm:text-5xl lg:text-6xl leading-tight"></p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:w-[30%] lg:w-[35%] md:py-[2rem] md:gap-3">
          <div className="grid grid-rows-2 w-full ">
            {firstTwoItems.map((item) => (
              <ImageComponent
                key={item.id}
                src={item.path}
                alt={item.alt}
                style={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
              />
            ))}
          </div>
          <div className="grid grid-rows-2 w-full ">
            {" "}
            {lastTwoItems.map((item) => (
              <ImageComponent
                key={item.id}
                src={item.path}
                alt={item.alt}
                style={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
