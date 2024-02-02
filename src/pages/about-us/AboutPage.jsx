import React, { useEffect } from "react"
import About from "./sections/About"
import AboutWhatWeDo from "./sections/AboutWhatWeDo"
import WhatWeOffer from "./sections/WhatWeOffer"
import WhatWeOfferItems from "../../components/items/WhatWeOfferItems"
import OurCoreValues from "./sections/OurCoreValues"
import OurCoreValuesItems from "../../components/items/OurCoreValuesItems"
import ReadyToPartner from "../../components/footer/ReadyToPartner"

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <About />
      <AboutWhatWeDo/>
      <WhatWeOffer items={WhatWeOfferItems}/> 
      <OurCoreValues values={OurCoreValuesItems}/>
      <ReadyToPartner />
    </>
  )
}

export default AboutPage