import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="images/logo.png" alt="Logo kasa"></img>
      <ul className="nav-bar">
        <NavLink exact="true" to="/" activeclassname="active">
          <li>Accueil</li>
        </NavLink>
        <NavLink exact="true" to="/about" activeclassname="active">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
