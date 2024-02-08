import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const ReadyToPartner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/contact-us");
  };

  return (
    <div className="py-[5rem]">
      <div className="grid lg:flex font-[exo] lg:max-w-[1240px] py-[5rem] px-[2rem] rounded-lg lg:mx-auto bg-[#f2f5f8]">
        <h1 className="font-semibold text-3xl pb-[1rem] sm:text-4xl lg:text-5xl text-[#181830]">
          Ready to <span className="text-[#E87B37]">partner</span> with us ?
        </h1>
        <div className="grid gap-8 place-content-center">
          <p className=" text-sm sm:text-md lg:text-lg">
            Grow your business while reducing operational cost and time and
            keeping the core business focus in-house.
          </p>
          <Button description="Get In Touch" onClick={handleNavigate} />
        </div>
      </div>
    </div>
  );
};

export default ReadyToPartner;
