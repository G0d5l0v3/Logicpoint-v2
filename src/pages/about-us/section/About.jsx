import React from "react";
import ImageComponent from "../../../components/imageComponent/ImageComponent";

const About = () => {
  const image = {
    path: "https://res.cloudinary.com/db5az7ydi/image/upload/f_auto,q_auto/v1/logicpoint-assets/qhe2t8i66zndto2i5apz",
    alt: "what-we-do-poster",
    style: "h-80 2xl:h-100 w-full object-cover rounded-lg",
    hash: "LLJkTA.8tn?v?^%1of-;9EIUMwoz",
  };

  return (
    <div className="bg-[#fcfafc]">
      <div className="px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto] ">
        <h1 className="font-[exo] text-[#181830] text-4xl sm:text-5xl lg:whitespace-normal lg:text-6xl font-semibold leading-tight">
          <span>
            Committed to{" "}
            <span className="text-[#E87B37]">elevating your business </span>{" "}
          </span>
          <br />
          <span> through step-by-step collaborations</span>
        </h1>

        <p className="py-[1rem]  lg:whitespace-normal sm:py-[2rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
          <span>
            We deploy the best-in-class technology to meet the unique{" "}
          </span>
          <br className="hidden sm:flex" />
          <span>needs of each of our clients. Our solutions are at the </span>
          <br className="hidden sm:flex" />
          <span>cutting edge of contact centre business.</span>
        </p>
        <div className="py-[3rem]">
          <ImageComponent
            src={image.path}
            hash={image.hash}
            style={image.style}
            alt={image.alt}
            width={1000}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
