import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav__list">
      <Link to="/">
        <NavItem title="All" />
      </Link>
      <Link to="/todo">
        <NavItem title="Todo" />
      </Link>
      <Link to="/in-progress">
        <NavItem title="In Progress" />
      </Link>
      <Link to="done">
        <NavItem title="Done" />
      </Link>
    </ul>
  );
};

export default Nav;
