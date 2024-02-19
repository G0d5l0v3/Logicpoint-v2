import React from "react";
import { Result, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Button from "../../../components/button/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay and then set isLoading to false
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading ? (
    <div className="flex justify-center pt-[20rem] min-h-screen  w-full">
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
    <Result
      status="warning"
      title="We are fixing this page, try again later."
      extra={
        <Link to="/">
          {" "}
          <Button description="Back to Home" />
        </Link>
      }
      className="font-[exo] font-semibold min-h-screen"
    />
  );
};
export default Shop;
