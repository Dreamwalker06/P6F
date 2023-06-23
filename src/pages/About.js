import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import backgroundImage from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash2.webp";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner
        background={`url(${backgroundImage})`}
        size="223px"
        className="banner"
        filter="brightness(70%)"
      />
      <div className="collapse">
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discrminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discrminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
