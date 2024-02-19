import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { motion } from "framer-motion";
import ReadyToPartner from "../../components/footer/ReadyToPartner";
import Services from "./sections/Services";

const ServicePage = () => {
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
        >
          <Services />
          <ReadyToPartner />
        </motion.div>
      )}
    </>
  );
};

export default ServicePage;
