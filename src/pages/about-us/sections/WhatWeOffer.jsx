import Button from "../../../components/button/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhatWeOffer = ({items}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate('/contact-us')
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="relative bg-[#f2f5f8] font-[exo] py-[15rem] md:py-[16rem] lg:py-[18rem]">
      <div className="absolute top-0 left-0 right-0 -m-8 bg-white w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]  py-8 sm:py-12 md:py-16 lg:py-20 shadow-xl max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
            <span className="border-b-8 border-[#5D1570]">What</span>
            <span className="text-[#E87B37]"> We Offer</span>{" "}
          </h1>
          <div className="pt-[2rem]">
            {items.map((item, index) => (
              <div className="flex items-center gap-3 py-[1rem]" key={index}>
                <img src={item.image} className="w-10 h-10" />
                <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[3rem]">
          <Button description="Talk to Us" onClick={handleNavigate}/>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
