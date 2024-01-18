import { NavLink } from "react-router-dom";

const Links = ({ items, style }) => {
  return (
    <div className={style}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({isActive}) => {
            return isActive
              ? "text-[#5D1570] font-[exo] font-semibold"
              : "text-[#181830] hover:opacity-[0.7] font-[exo] font-semibold";
          }}
        >
          {" "}
          {item.name}{" "}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
