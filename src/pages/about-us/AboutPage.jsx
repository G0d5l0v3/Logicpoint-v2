import React, { useEffect } from "react"
import About from "./section/About"
import AboutWhatWeDo from "./section/AboutWhatWeDo"
import WhatWeOffer from "./section/WhatWeOffer"
import OurCoreValues from "./section/OurCoreValues"

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <About />
      <AboutWhatWeDo/>
      <WhatWeOffer /> 
      <OurCoreValues />
    </>
  )
}

export default AboutPage