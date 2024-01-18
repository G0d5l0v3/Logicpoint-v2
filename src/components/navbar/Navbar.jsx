import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Links from "./Links";
import NavItems from "./NavItems";
import Button from "../button/Button";
import logo from "../../assets/images/Logicpoint-Logo.svg";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={
        scrollPosition !== 0
          ? "sticky top-0 z-10 font-[exo] shadow bg-white/25 backdrop-blur-[20px] backdrop-saturation-[180%]"
          : "sticky top-0 z-10 font-[exo]"
      }
    >
      <nav className={isOpen ? "bg-[#ece7eb] h-screen relative" : ""}>
        <div className="flex justify-between px-[1rem] py-[.2rem] lg:hidden">
          <img
            src={logo}
            loading="lazy"
            decoding="async"
            alt="company-logo"
            className="w-20 h-10"
          />

          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            easing="ease-in"
          />
        </div>
        {isOpen && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-10 flex flex-col">
          <Links items={NavItems} style="flex flex-col justify-center items-center gap-10" />
          <Button color={"black"} description="Contact Us" />
        </div>
      )}
      </nav>


    </header>
  );
};

export default Navbar;
