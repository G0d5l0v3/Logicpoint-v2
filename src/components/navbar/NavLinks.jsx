import { NavLink } from "react-router-dom";

const NavLinks = ({ items, style }) => {
  return (
    <div className={style}>
      {items.map((index, item) => (
        <NavLink key={index} to={item.to}> {item.name} </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
