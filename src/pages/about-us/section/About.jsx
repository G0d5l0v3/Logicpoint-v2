import React from "react";
import ImageComponent from "../../../components/imageComponent/ImageComponent";

const About = () => {
  const image = {
    path: "https://res.cloudinary.com/db5az7ydi/image/upload/f_auto,q_auto/v1/logicpoint-assets/sqsc3zaraxsr9lhvigly",
    alt: "what-we-do-poster",
    style: "h-80 2xl:h-100 w-full object-cover rounded-lg",
    hash: "LAQbIX%f{1M|e.aeysxFqvRjbtoz",
  };

  return (
    <div className="bg-[#fcfafc]">
      <div className="grid place-content-center px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto] ">
        <h1 className="text-center font-[exo] text-[#181830] text-3xl sm:text-4xl lg:whitespace-normal lg:text-5xl font-semibold leading-tight">
          <span>
            Committed to{" "}
            <span className="text-[#5D1570]">elevating your business </span>{" "}
          </span>
          <br />
          <span> through <span className="text-[#E87B37]">step-by-step </span> collaborations</span>
        </h1>

        <p className="py-[1rem] text-center lg:whitespace-normal sm:py-[2rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
          <span>
            We deploy the best-in-class technology to meet the unique{" "}
          </span>
          <br className="hidden sm:flex" />
          <span>needs of each of our clients. Our solutions are at the </span>
          <br className="hidden sm:flex" />
          <span>cutting edge of contact centre business.</span>
        </p>
        <div className="grid place-content-center">
          <ImageComponent
            src={image.path}
            hash={image.hash}
            style={image.style}
            alt={image.alt}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
