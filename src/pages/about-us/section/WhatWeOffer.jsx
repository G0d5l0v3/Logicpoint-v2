import React from "react";
import Button from "../../../components/button/Button";
import Image from "../../../assets/images/engineering.png";
import Image2 from "../../../assets/images/customer-service.png";
import Image3 from "../../../assets/images/nanotechnology.png";

const WhatWeOffer = () => {
  return (
    <div className="relative bg-[#f2f5f8] font-[exo] py-[15rem] md:py-[16rem] lg:py-[18rem]">
      <div className="absolute top-0 left-0 right-0 -m-8 bg-white w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]  py-8 sm:py-12 md:py-16 lg:py-20 shadow-xl max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
            <span className="border-b-8 border-[#5D1570]">What</span>
            <span className="text-[#E87B37]"> We Offer</span>{" "}
          </h1>
          <div className="pt-[2rem]">
            <div className="flex items-center gap-3 py-[1rem]">
              <img src={Image3} className="w-10 h-10" />
              <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                Cost reductions of up to 70% for frontline and back office
                services.
              </p>
            </div>
            <div className="flex items-center gap-3 py-[1rem]">
              <img src={Image2} className="w-10 h-10" />
              <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                Multi-talented teams of customer service and support from
                seasoned experts.
              </p>
            </div>
            <div className="flex items-center gap-3 py-[1rem]">
            <img src={Image} className="w-10 h-10" />
              <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                Multi-process outsourced solutions that enable your business to
                scale.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[3rem]">
          <Button description="Get In Touch" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
