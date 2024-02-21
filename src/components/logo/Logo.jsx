import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Logo = ({ style }) => {
  return (
    <Link to="/">
      <img
        src={logo}
        loading="lazy"
        decoding="async"
        alt="company-logo"
        className={style}
      />
    </Link>
  );
};

export default Logo;
