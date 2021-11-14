import React from "react";

const NavItem = ({ title, where }) => {
  return (
    <li className="nav__item">
      <p className="nav__link">{title}</p>
    </li>
  );
};

export default NavItem;
