import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { motion } from "framer-motion";
import About from "./sections/About";
import AboutWhatWeDo from "./sections/AboutWhatWeDo";
import WhatWeOffer from "./sections/WhatWeOffer";
import WhatWeOfferItems from "../../components/items/WhatWeOfferItems";
import OurCoreValues from "./sections/OurCoreValues";
import OurCoreValuesItems from "../../components/items/OurCoreValuesItems";
import ReadyToPartner from "../../components/footer/ReadyToPartner";

const AboutPage = () => {
  const animateEaseIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay and then set isLoading to false
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen w-full">
          {" "}
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 24,
                }}
                spin
              />
            }
          />
        </div>
      ) : (
        <motion.div
          variants={animateEaseIn}
          initial={"hidden"}
          animate={"visible"}
        >
          <About />
          <AboutWhatWeDo />
          <WhatWeOffer items={WhatWeOfferItems} />
          <OurCoreValues values={OurCoreValuesItems} />
          <ReadyToPartner />
        </motion.div>
      )}
    </>
  );
};

export default AboutPage;
