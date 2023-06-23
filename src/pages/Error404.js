import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Navigation />
      <div className="erreurPage">
        <img className="erreurImage" src="images/404.svg" alt="Image 404" />
        <p className="erreurTextOops">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          <p className="erreurTextRedirection">
            Retourner sur la page d'accueil
          </p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
