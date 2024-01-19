import React from "react";
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Logo = ({ style }) => {
  return (
    <img
      src={logo}
      loading="lazy"
      decoding="async"
      alt="company-logo"
      className={style}
    />
  );
};

export default Logo;
