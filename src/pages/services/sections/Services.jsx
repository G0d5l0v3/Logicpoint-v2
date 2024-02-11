import React from "react";
import { useNavigate } from "react-router-dom"
import Button from "../../../components/button/Button";
import Accordion from "../../../components/accordion/Accordion";
import AccordionItems from "../../../components/items/AccordionItems";

const Services = () => {
  const navigate = useNavigate();
  const handleNavigate =  () => {
    return  navigate("/contact-us");
  }
  return (
    <div className="bg-gradient-to-r from-[#fcfafc] to-[#eaeaea]">
      <div className="grid lg:flex lg:justify-between font-[exo] lg:max-w-[1240px] py-[5rem] px-[2rem] rounded-lg lg:mx-auto ">
        <div className="lg:w-[45%] py-[3rem]">
          <h1 className="font-semibold text-3xl pb-[1rem] sm:text-4xl lg:text-5xl text-[#181830]">
            What We Can Provide
            <span className="text-[#E87B37]"> For You</span>
          </h1>
          <p className="pb-[2rem] text-sm font-[poppins] sm:text-md lg:text-lg text-[#181830]">
            At Logicpoint, we have deep vertical expertise and a unique
            understanding of industry-specific needs.
          </p>
          <Button description="Connect with Us" onClick={handleNavigate} />
        </div>
        <Accordion items={AccordionItems} />
      </div>
    </div>
  );
};

export default Services;
