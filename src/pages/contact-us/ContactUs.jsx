import React, { useEffect } from "react";
import GetInTouch from "./sections/GetInTouch";
import GetInTouchItems from "../../components/items/GetInTouchItems";
import Form from "../../components/form/Form"

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GetInTouch items={GetInTouchItems} />
      <Form />
    </>
  );
};

export default ContactUs;
