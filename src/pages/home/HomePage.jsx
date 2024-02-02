import React, { useEffect } from "react"
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import ServicesWeOffer from "./sections/ServicesWeOffer";
import OurCommitment from "./sections/OurCommitment";
import WhatMotivatesUs from "./sections/WhatMotivatesUs";
import Clients from "./sections/Clients";
import ClientsItems from "../../components/items/ClientsItem";
import ReadyToPartner from "../../components/footer/ReadyToPartner";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesWeOffer />
      <OurCommitment />
      <WhatMotivatesUs />
      <Clients images={ClientsItems} />
      <ReadyToPartner />
    </>
  );
};

export default HomePage;
