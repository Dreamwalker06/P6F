import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import backgroundImage from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash2.webp";

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
      <Footer />
    </div>
  );
};

export default About;
