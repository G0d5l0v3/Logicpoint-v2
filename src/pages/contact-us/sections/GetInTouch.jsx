import React from "react";

const GetInTouch = () => {
  return (
    <div className="grid place-content-center px-[1rem] pt-[5rem] lg:max-w-[1240px] lg:mx-[auto] ">
      <h1 className="text-center font-[exo] text-[#181830] text-3xl sm:text-4xl lg:whitespace-normal lg:text-5xl font-semibold leading-tight">
        Get In <span className="text-[#5D1570]">Touch </span>{" "}
      </h1>
      <p className="py-[1rem] text-center lg:whitespace-normal sm:py-[2rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
        We would love to hear from you.
      </p>

      <div className="grid grid-row-3">
        <div className=" border-r px-2">
          <h1 className="font-bold">General Information</h1>
          <p></p>
        </div>
        <div className="border-r px-2">
          <h1 className="font-bold">Career</h1>
          <p></p>
        </div>
        <div className=" border-r px-2">
          <h1 className="font-bold">Sales</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
