import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#dedede] font-[exo] text-black">
      <div className="grid lg:grid-cols-2 place-content-center gap-3 py-[3rem] max-w-[1240px] mx-auto px-[2rem] sm:px-[5rem]">
        <div className="hidden lg:flex lg:items-center ">
          <Logo style="w-40 h-20" />
        </div>
        <div className="grid md:flex gap-9 md:gap-40 md:justify-end">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-lg">
              Navigation
            </h1>
            <NavLink
              to="/about-us"
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              Services
            </NavLink>

            <NavLink
              to="/leadership"
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              Leadership
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-lg">
              Resources
            </h1>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              Gallery
            </NavLink>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              Case Studies
            </NavLink>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-md hover:opacity-[0.7]"
            >
              Privacy Policy
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-lg">
              Contact
            </h1>
            <p className="text-sm sm:text-md lg:text-md">
              support@logicpointng.com
            </p>
            <p className="text-sm sm:text-md lg:text-md">
              22, Idowu Taylor Street, Victoria Island, Lagos
            </p>
            <p className="text-sm sm:text-md lg:text-md">
              NG: +234 (1) 888 8185
            </p>
            <p className="text-sm sm:text-md lg:text-md">
              US: +1 (609) 874-9097
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-content-center pt-[3rem] lg:hidden">
        <Logo style="w-25 h-10" />
      </div>
      <div className="flex items-center justify-center h-[5rem] border-t-[0.5px] mt-[2rem] lg:mt-0 border-[#5D1570] max-w-[1240px] mx-auto">
        <p className="text-[.5rem] sm:text-[.7rem] lg:text-[.9rem]">Copyright © 2024 Logicpoint Integrated Concepts Limited</p>
      </div>
    </div>
  );
};

export default Footer;
