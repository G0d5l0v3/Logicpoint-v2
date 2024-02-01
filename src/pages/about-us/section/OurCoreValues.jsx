
const OurCoreValues = ({ values }) => {
  return (
    <div className="flex flex-col items-center justify-center px-[1rem] py-[5rem] lg:max-w-[1240px] lg:mx-[auto]">
      <h1 className="font-[exo] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#181830]">
        <span className="text-[#E87B37] border-b-8 border-[#5D1570] ">Our</span>{" "}
        <span>Core Values</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 font-[exo] pt-[4rem]">
        {values.map((value) => (
          <div
            className="grid bg-[#0a0a1a] text-white shadow-lg rounded-lg h-[20rem] 2xl:h-[25rem] px-[1rem] sm:px-[2rem] pt-[2rem]"
            key={value.id}
          >
            <img src={value.path} className="w-10 h-10" />
            <h1 className="font-bold">{value.title}</h1>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
