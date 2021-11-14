import React from "react";

const NavItem = ({ title, where }) => {
  return (
    <li className="nav__item">
      <a className="nav__link all" href={where}>
        {title}
      </a>
    </li>
  );
};

export default NavItem;
