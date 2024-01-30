import React from "react";
import Button from "../../../components/button/Button";

const WhatWeOffer = () => {
  return (
    <div className="relative bg-[#f2f5f8] py-[15rem] md:py-[16rem] lg:py-[18rem]">
      <div className="absolute top-0 left-0 right-0 -m-8 bg-white w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]  py-8 sm:py-12 md:py-16 lg:py-20 shadow-xl max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
            <span className="border-b-8 border-[#5D1570]">What</span>
            <span className="text-[#E87B37]"> We Offer</span>{" "}
          </h1>
          <p className="pt-[3rem] lg:whitespace-normal font-[poppins] text-sm sm:text-md lg:text-lg leading-tight">
            We provide first-class contact center services from our ultramodern
            facilities in Abuja, Kaduna and Lagos. Our services are tailored to
            perfectly suit our clients’ needs and preferences, with a focus on
            service quality, low-cost and scalable solution
          </p>
          <p className="pt-[1rem] lg:whitespace-normal font-[poppins] text-sm sm:text-md lg:text-lg leading-tight">
            We help our clients become operationally efficient and competitive.
            We have created over 1000 direct graduate jobs for customer care
            executives, sales, marketing, tech, accounting, legal practitioners
            and medical professionals serving the global market. Outsource
            Global seeks to positively impact the world of business, by
            fostering exponential growth.
          </p>
        </div>
        <div className="pt-[3rem]">
          <Button description="Get In Touch" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
