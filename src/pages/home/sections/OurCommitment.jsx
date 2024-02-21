import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

const OurCommitment = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    return navigate('/contact-us')
  }
  return (
    <div className="bg-[#181830]">
      <div className="font-[exo] flex flex-col md:flex justify-center pt-[5rem] max-w-[1240px] mx-auto px-[1rem] sm:px-[1rem]">
        <div>
          <motion.h1
            className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl"
          >
            <span className="border-b-8 border-[#5D1570] ">Our </span>
            <span>Commitment </span>
            <span className="text-[#E87B37]">to You</span>{" "}
          </motion.h1>
        </div>
        <div
          className="text-white font-[exo]"
        >
          <div className="grid pt-[2rem] md:flex gap-3">
            <div>
              <h1 className="font-bold text-[#E87B37]">Exponential Growth</h1>
              <div className="pt-[1rem]">
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    1
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Committed 24/7 to generating sales and new customers for
                    your business.
                  </p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    2{" "}
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Proficient, highly skilled technical personnels providing world-class
                    customer services.
                  </p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    3{" "}
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Multi-process outsourced solutions that enable your business
                    to scale.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-[#E87B37]">Cost Efficiency</h1>
              <div className="grid pt-[1rem]">
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    1{" "}
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Cost reductions of up to 70% for frontline and back office
                    services.
                  </p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    2{" "}
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Multi-talented teams of customer service and support from
                    seasoned experts.
                  </p>
                </div>
                <div className="flex items-center gap-3 py-[1rem]">
                  <span className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E87B37]">
                    3{" "}
                  </span>{" "}
                  <p className="max-w-[80%] text-sm sm:text-md lg:text-lg">
                    Multi-process outsourced solutions that enable your business
                    to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[3rem] hover:opacity-[0.7]">
            <Button description="Talk to Us" onClick={handleNavigate}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;