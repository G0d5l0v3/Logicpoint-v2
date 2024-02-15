import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/Logicpoint-Logo.svg";

const Logo = ({ style }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(232, 123, 55, 1)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255,255,253,57)",
    },
  };
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
