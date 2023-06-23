import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import backgroundImage from "../assets/images/Image1.webp";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner
        background={`url(${backgroundImage})`}
        size="223px"
        className="banner"
        filter="brightness(70%)"
      >
        Chez vous, partout et ailleurs
      </Banner>

      <Footer />
    </div>
  );
};

export default Home;
