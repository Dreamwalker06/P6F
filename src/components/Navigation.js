import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="images/logo.png" alt="Logo kasa"></img>
      <ul className="nav-bar">
        <NavLink exact to="/" activeClassName="active">
          <li>Accueil</li>
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
