import HeroItems from "./HeroItems";

const Hero = () => {
  const firstTwoItems = HeroItems.slice(0, 2);
  const lastTwoItems = HeroItems.slice(2);

  return (
    <div className="flex flex-wrap items-center justify-between px-[1rem] py-[.2rem] lg:max-w-[1240px] lg:mx-[auto]">
      <h1 class="pt-[3rem] font-[exo] text-[#181830] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
        <span class="lg:whitespace-nowrap">Empowering Brands </span>
        <br />
        <span class=" lg:whitespace-normal">
          With <span className="text-[#E87B37]">Seamless </span>
        </span>
        <br />
        <span class=" lg:whitespace-normal">IT Solutions</span>
      </h1>

      <div className="hidden md:grid md:grid-cols-2 md:w-[30%] lg:w-[35%] md:py-[2rem] md:gap-3">
        <div className="grid grid-rows-2 w-full ">
          {firstTwoItems.map((item) => (
            <img
              key={item.id}
              src={item.path}
              alt={item.alt}
              className={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <div className="grid grid-rows-2 w-full ">
          {" "}
          {lastTwoItems.map((item) => (
            <img
              key={item.id}
              src={item.path}
              alt={item.alt}
              className={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
