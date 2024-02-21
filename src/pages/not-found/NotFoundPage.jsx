// Import Neccesary Dependencies
import React from "react";
import { motion } from "framer-motion";
import { Result } from "antd";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
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
  return (
    <React.Fragment>
      <motion.div
        className="bg-[#FFFBF6] py-[8rem] min-h-screen w-full"
        variants={animateEaseIn}
        initial="hidden"
        animate="visible"
      >
        {/* Result Component for 404 */}
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          className="font-[exo]"
          extra={
            // Link back to home page
            <Link to="/">
              <Button description="Back Home" className="font-[exo] bg-[#9B5DE6]" />
            </Link>
          }
        />
      </motion.div>
    </React.Fragment>
  );
};

// Export the NotFoundPage component
export default NotFoundPage;
