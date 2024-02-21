import ImageComponent from "../../../components/imageComponent/ImageComponent";

const WhatWeDo = () => {
  const image = {
    path: "https://res.cloudinary.com/db5az7ydi/image/upload/f_auto,q_auto/v1/logicpoint-assets/eapecmixdfiwndvjlmqp",
    alt: "what-we-do-poster",
    style: "h-80 2xl:h-100 w-full object-cover rounded-lg",
    hash: "LLJkTA.8tn?v?^%1of-;9EIUMwoz",
  };
  return (
    <div className="bg-gradient-to-r from-[#ece7eb] to-[#f3f0f2]">
      <div className="grid place-content-center px-[1rem] py-[5rem] lg:py-[10rem] sm:flex sm:items-center sm:justify-between lg:max-w-[1240px] lg:mx-[auto]">
        <div>
          <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
            <span className="text-[#E87B37] border-b-8 border-[#5D1570] ">
              What
            </span>{" "}
            <span>We Do</span>
          </h1>
          <p className="py-[3rem] lg:whitespace-normal sm:py-[3rem] font-[poppins] text-[#181830] text-sm sm:text-md lg:text-lg leading-tight">
            <span>
              We redefine possibilities. Expertise in tech and voice solutions.{" "}
            </span>
            <br className="hidden sm:flex" />
            <span>
              Specializing in call centers and IT deployments. Innovation{" "}
            </span>
            <br className="hidden sm:flex" />
            <span>that transforms. Solutions that empower. Your success is </span>
            <br className="hidden sm:flex" />
            <span>our mission.</span>
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <ImageComponent
            src={image.path}
            hash={image.hash}
            style={image.style}
            alt={image.alt}
            width={600}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
