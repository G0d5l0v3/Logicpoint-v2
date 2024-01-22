import Logo from "../../../components/logo/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#eee3ff] text-white font-[Exo] py-[3rem]">
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col items-center text-black">
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
            to="/blog"
            className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
          >
            Blog
          </NavLink>
          <NavLink
            to="/leadership"
            className="text-sm sm:text-md lg:text-lg hover:opacity-[0.7]"
          >
            Leadership
          </NavLink>
        </div>
        <div className="flex flex-col items-center text-black">
          <h1 className="font-bold text-[#5D1570]  text-md sm:text-lg lg:text-xl">
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
        <div className="flex flex-col items-center text-black">
          <h1 className="font-bold text-[#5D1570] text-md sm:text-lg lg:text-xl">
            Contact
          </h1>
          <p className="text-sm sm:text-md lg:text-lg">NG: +234 (1) 888 8185</p>
          <p className="text-sm sm:text-md lg:text-lg">US: +1 (609) 874-9097</p>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Logo style="w-full w-40 h-20" />
      </div>
    </div>
  );
};

export default Footer;
