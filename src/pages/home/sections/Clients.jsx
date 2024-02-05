import React from "react";
import FastMarquee from "react-fast-marquee";

const Clients = ({ images }) => {
  const duplicatedImage = [...images, ...images];

  return (
    <div className="flex flex-col items-center justify-center py-[5rem]">
      <div className="flex justify-center items-center">
        <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl py-[0.3rem] text-[#181830]">
          <span className="text-[#E87B37] border-b-8 border-[#5D1570] ">
            Our
          </span>{" "}
          Clients
        </h1>
      </div>

      <div className="flex items-center w-full h-[20svh] lg:h-[auto] justify-center pt-[4rem] grayscale hover:grayscale-0 hover:transition hover:ease-in-out hover:delay-150">
        <FastMarquee speed={60} gradient>
          {duplicatedImage.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt="companyImg"
                className={`pr-[5rem] mx-[-20px] ${image.id === 7 ? "w-21 h-6" : ""}`}
              />
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Clients;
