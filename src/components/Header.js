import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <a className="logo" href="/">
      <img src="/images/logo.png" alt="vinyldirectory.nz" />
    </a>
    <nav className="float-right">
      <NavLink to="/" activeClassName="active" exact className="nav__item">
        Map view
      </NavLink>
      <NavLink to="/list" activeClassName="active" className="nav__item">
        List view
      </NavLink>
      <NavLink to="/favourites" activeClassName="active" className="nav__item">
        Favourites
      </NavLink>
    </nav>
  </header>
);

export default Header;