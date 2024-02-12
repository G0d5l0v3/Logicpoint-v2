const Button = ({ description, color, onClick, type }) => {
  return (
    <button
      className={
        color === "black"
          ? "text-white text-[0.8rem] bg-[#0a0a1a] hover:opacity-[0.6] font-semibold font-[exo] px-4 py-2 "
          : color === "mobile"
          ? "text-white text-[2.5rem] bg-[#0a0a1a] hover:opacity-[0.6] font-semibold font-[exo] px-4 py-2 "
          : "hover:border-[#5D1570] bg-[#5D1570] border-none text-white hover:opacity-[0.7] border-2 text-[0.8rem] font-[exo] font-semibold max-w-[15rem] px-4 py-2 "
      }
      onClick={onClick}
      type={type}
    >
      {description}
    </button>
  );
};

export default Button;
