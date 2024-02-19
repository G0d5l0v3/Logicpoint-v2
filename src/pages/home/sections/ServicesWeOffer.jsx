import OurServicesBox from "../../../components/items/OurServicesBox";
import {motion} from "framer-motion"
import OurServicesItems from "../../../components/items/OurServicesItems";

const ServicesWeOffer = () => {

  return (
    <div>
      <div className="flex flex-col py-[5rem] sm:justify-center sm:items-center min-h-screen max-w-[1440px] mx-auto px-[1rem] sm:px-[5rem]">
        <div>
          <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
            <span className="border-b-8 border-[#5D1570] ">Services</span>
            <span className="text-[#E87B37]"> We Offer</span>{" "}
          </h1>
        </div>
        <div className="pt-[4rem]">
          <OurServicesBox services={OurServicesItems} />
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
