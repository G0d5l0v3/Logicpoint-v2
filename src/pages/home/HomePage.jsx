import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import ServicesWeOffer from "./sections/ServicesWeOffer";
import OurCommitment from "./sections/OurCommitment";
import WhatMotivatesUs from "./sections/WhatMotivatesUs";
import Clients from "./sections/Clients";
import ClientsItems from "../../components/items/ClientsItem";
import Footer from "../../pages/home/sections/Footer"

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesWeOffer />
      <OurCommitment />
      <WhatMotivatesUs />
      <Clients images={ClientsItems} />
      <Footer />
    </>
  );
};

export default HomePage;
