import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import HeroItems from "../../../components/items/HeroItems";
import ImageComponent from "../../../components/imageComponent/ImageComponent";

const firstTwoItems = HeroItems.slice(0, 2);
const lastTwoItems = HeroItems.slice(2);

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate('/contact-us')
  }
  return (
    <>
      <div className="flex items-center justify-between px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto]">
        <div>
          <h1 className=" font-[exo] text-[#181830] text-4xl sm:text-5xl lg:whitespace-normal lg:text-6xl font-semibold leading-tight">
            <span>Empowering Brands </span>
            <br />
            <span>
              With <span className="text-[#E87B37]">Seamless </span>
            </span>
            <br />
            <span>IT Solutions</span>
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
          <Button description="Connect with Us" onClick = {handleClick}/>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:w-[30%] lg:w-[35%] md:gap-3">
          <div className="grid grid-rows-2 w-full">
            {firstTwoItems.map((item) => (
              <div key={item.key}>
                <ImageComponent
                  src={item.path}
                  hash={item.hash}
                  alt={item.alt}
                  style={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
                  width={250}
                  height={250}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 w-full">
            {" "}
            {lastTwoItems.map((item) => (
              <div key={item.key}>
                <ImageComponent
                  src={item.path}
                  hash={item.hash}
                  alt={item.alt}
                  style={`md:h-40 lg:h-60 2xl:h-80 w-full ${item.style}`}
                  width={250}
                  height={250}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
