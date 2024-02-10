import React from "react";

const GetInTouch = ({ items }) => {
  return (
    <div className="flex flex-col justify-center px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto]">
      <h1 className="text-center font-[exo] text-[#181830] text-3xl sm:text-4xl lg:whitespace-normal lg:text-5xl font-semibold leading-tight">
        Get In <span className="text-[#5D1570]">Touch </span>{" "}
      </h1>
      <p className="py-[1rem] text-center lg:whitespace-normal sm:py-[2rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
        We would love to hear from you.
      </p>

      <div className="grid gap-12 lg:gap-0 lg:grid-cols-3 font-[exo] pt-[3rem]">
        {items.map((item) => (
          <div className={item.style} key={item.id}>
            <h1 className="font-bold text-[#5D1570]">{item.title}</h1>
            <p className="pt-[1.5rem]">{item.description}</p>
            <div className="flex gap-4 pt-[2rem] text-[0.9rem]">
              <img  src={item.path} className="w-7 h-7" alt="" />
              <p>{item.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
