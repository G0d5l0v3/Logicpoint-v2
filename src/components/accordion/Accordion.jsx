import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  function handleToggle(id) {
    setActiveItemId(id !== activeItemId ? id : null);
  }
  return (
    <div className="grid lg:w-[50%] gap-8 ">
      {items.map((item) => (
        <div
          className={`flex flex-col py-[1.5rem] px-[1.5rem] lg:px-[3rem] rounded-lg shadow-lg bg-white hover:cursor-pointer hover:shadow-[#cdb8d4] ${
            item.id === activeItemId ? "hover:shadow-lg border-t-2 border-t-[#cdb8d4]" : ""
          } hover:shadow-md`}
          key={item.id}
          onClick={() => handleToggle(item.id)}
        >
          <div className="flex justify-between items-center w-full">
            <h1 className={`font-semibold font-[exo] ${item.id === activeItemId ? "text-[#5D1570]" : "text-black"}`}>{item.title}</h1>
            <span className="flex items-center font-bold text-white text-xl justify-center rounded-full h-10 w-10 bg-[#5D1570]">
              {item.id === activeItemId ? "-" : "+"}
            </span>
          </div>
          {item.id === activeItemId && (
            <div className="py-[1.3rem]">
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
