import React, { useEffect } from "react"
import About from "./section/About"
import AboutWhatWeDo from "./section/AboutWhatWeDo"
import WhatWeOffer from "./section/WhatWeOffer"
import WhatWeOfferItems from "../../components/items/WhatWeOfferItems"
import OurCoreValues from "./section/OurCoreValues"
import OurCoreValuesItems from "../../components/items/OurCoreValuesItems"

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
    </>
  )
}

export default AboutPage