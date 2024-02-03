import React, { useEffect } from "react";
import ReadyToPartner from "../../components/footer/ReadyToPartner";
import Services from "./sections/Services";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Services />
      <ReadyToPartner />
    </>
  );
};

export default ServicePage;
