import React, { useEffect } from "react";
import GetInTouch from "./sections/GetInTouch";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <GetInTouch />
    </>
  );
};

export default ContactUs;
