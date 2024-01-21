import React from "react";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import ServicesWeOffer from "./sections/ServicesWeOffer";
import OurCommitment from "./sections/OurCommitment";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <ServicesWeOffer />
      <OurCommitment />
    </div>
  );
};

export default HomePage;
