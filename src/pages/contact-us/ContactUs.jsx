import React, { useEffect } from "react";
import GetInTouch from "./sections/GetInTouch";
import GetInTouchItems from "../../components/items/GetInTouchItems";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GetInTouch items={GetInTouchItems} />
    </>
  );
};

export default ContactUs;
