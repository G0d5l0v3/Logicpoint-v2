import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { motion } from "framer-motion";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import ServicesWeOffer from "./sections/ServicesWeOffer";
import OurCommitment from "./sections/OurCommitment";
import WhatMotivatesUs from "./sections/WhatMotivatesUs";
import Clients from "./sections/Clients";
import ClientsItems from "../../components/items/ClientsItem";
import ReadyToPartner from "../../components/footer/ReadyToPartner"

const HomePage = () => {
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
    }, 1000);
  }, []);


  return (
    <>
      {isLoading ? (
        <div className="flex pt-[20rem] justify-center h-screen w-full">
          {" "}
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 30,
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
          className=""
        >
          <Hero />
          <WhatWeDo />
          <ServicesWeOffer />
          <OurCommitment />
          <WhatMotivatesUs />
          <Clients images={ClientsItems} />
          <ReadyToPartner />{" "}
        </motion.div>
      )}
    </>
  );
};

export default HomePage;
