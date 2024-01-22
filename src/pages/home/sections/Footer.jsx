import Logo from "../../../components/logo/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#dedede] font-[exo] text-black py-[3rem]">
      <div className="grid md:grid-cols-2 place-content-center gap-3 min-h-[50svh] max-w-[1440px] mx-auto  px-[2rem] sm:px-[5rem]">
        <div className="hidden lg:flex lg:items-center ">
          <Logo style="w-40 h-20" />
        </div>
        <div className="grid md:flex gap-9 md:gap-40 md:justify-around">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-xl">
              Navigation
            </h1>
            <NavLink
              to="/about-us"
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              Services
            </NavLink>

            <NavLink
              to="/leadership"
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              Leadership
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-xl">
              Resources
            </h1>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              Gallery
            </NavLink>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              Case Studies
            </NavLink>
            <NavLink
              to=""
              className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
            >
              Privacy Policy
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-xl">
              Contact
            </h1>
            <p className="text-sm sm:text-md lg:text-lg">
              support@logicpointng.com
            </p>
            <p className="text-sm sm:text-md lg:text-lg">
              22, Idowu Taylor Street, Victoria Island, Lagos
            </p>
            <p className="text-sm sm:text-md lg:text-lg">
              NG: +234 (1) 888 8185
            </p>
            <p className="text-sm sm:text-md lg:text-lg">
              US: +1 (609) 874-9097
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-content-center pt-[3rem] lg:hidden">
          <Logo style="w-25 h-10" />
        </div>
    </div>
  );
};

export default Footer;
