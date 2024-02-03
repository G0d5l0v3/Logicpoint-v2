import React, { useState } from "react";

const Accordion = ({ items }) => {
  return (
    <div className="grid lg:w-[50%] gap-8 ">
      {items.map((item, index) => (
        <div
          className="flex font-[poppins] bg-white py-[1.3rem] px-[3rem] font-semibold rounded-lg shadow-lg"
          key={index}
        >
          <div className="flex items-center  justify-between w-full">
            <h1>{item.title}</h1>
            <span className="flex items-center justify-center hover:cursor-pointer rounded-full font-bold text-white h-10 w-10 bg-[#5D1570]">
              +
            </span>
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
