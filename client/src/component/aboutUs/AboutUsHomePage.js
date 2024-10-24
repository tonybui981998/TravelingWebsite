import React from "react";
import NavBar from "../navBar/NavBar";
import AboutusHeader from "./aboutusHeader/AboutusHeader";
import AboutUsMission from "./aboutusMission/AboutUsMission";
import Ourteam from "./ourteam/Ourteam";
import Footer from "../footer/Footer";

const AboutUsHomePage = () => {
  return (
    <div>
      <NavBar />
      <AboutusHeader />
      <AboutUsMission />
      <Ourteam />
      <Footer />
    </div>
  );
};

export default AboutUsHomePage;
