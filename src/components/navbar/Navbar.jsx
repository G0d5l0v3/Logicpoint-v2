import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Links from "./Links";
import NavItems from "../items/NavItems";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { useScrollPosition } from "../../hooks/useScrollPosition";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={
        scrollPosition !== 0
          ? "sticky top-0 z-10 sm:font-[exo] shadow bg-white/25 backdrop-blur-[20px] backdrop-saturation-[180%]"
          : "sticky top-0 z-10 sm:font-[exo]"
      }
    >
      <nav
        className={
          isOpen ? "bg-[#ece7eb]/50 sticky h-screen lg:bg-white lg:h-[auto] text-[#181830] backdrop-blur-[20px] backdrop-saturation-[180%]" : ""
        }
      >
        <div className="flex items-center justify-between px-[1rem] py-[.2rem] lg:max-w-[1240px] lg:mx-[auto] lg:py-[1rem]">
          <div className="lg:hidden">
            <Logo style="flex w-20 h-10 border-r pr-2" />
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full">
            <div className="hidden lg:flex lg:justify-between">
              <Logo style="lg:w-25 lg:h-10 lg:border-r lg:px-2" />
              <Links
                items={NavItems}
                style="flex justify-center items-center gap-16 pl-10 text-[0.8rem] font-semibold"
                onClick={handleNavLinkClick}
              />
            </div>
            <Button color={"black"} description="Contact Us" />
          </div>

          <div className="lg:hidden">
            <Hamburger
              rounded
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              easing="ease-in"
            />
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-10 flex flex-col lg:hidden ">
            <Links
              items={NavItems}
              style="flex flex-col justify-center items-center gap-10 font-semibold"
              onClick={handleNavLinkClick}
            />
            <Button color={"black"} description="Contact Us" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
