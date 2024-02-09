import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-center px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto] ">
      <h1 className="text-center font-[exo] text-[#181830] text-3xl sm:text-4xl lg:whitespace-normal lg:text-5xl font-semibold leading-tight">
        Get In <span className="text-[#5D1570]">Touch </span>{" "}
      </h1>
      <p className="py-[1rem] text-center lg:whitespace-normal sm:py-[2rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
        We would love to hear from you.
      </p>

      <div className="grid gap-12 lg:gap-0 lg:grid-cols-3 font-[exo] pt-[3rem]">
        <div className=" lg:border-r px-[3rem]">
          <h1 className="font-bold text-[#5D1570]">General Information</h1>
          <p className="pt-[1.5rem]">For general information or information about the Logicpoint story, contact:</p>
        </div>
        <div className="lg:border-r px-[3rem]">
          <h1 className="font-bold text-[#5D1570]">Careers</h1>
          <p className="pt-[1.5rem]">Are you interested in joining the Logicpoint team? Reach us at</p>
        </div>
        <div className="px-[3rem]">
          <h1 className="font-bold text-[#5D1570]">Sales</h1>
          <p className="pt-[1.5rem]">To speak to us about sales and partnership ideas, say hello:</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
