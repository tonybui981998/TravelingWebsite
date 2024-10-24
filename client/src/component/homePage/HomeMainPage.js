import React from "react";
import NavBar from "../navBar/NavBar";
import HomePageHeader from "./homePageHeader/HomePageHeader";
import NavigationHomePage from "./navigationHomePage/NavigationHomePage";
import Destination from "./destination/Destination";
import OurSuccess from "./ourSuccess/OurSuccess";
import Footer from "../footer/Footer";

const HomeMainPage = () => {
  return (
    <>
      <NavBar />
      <HomePageHeader />
      <NavigationHomePage />
      <Destination />
      <OurSuccess />
      <Footer />
    </>
  );
};

export default HomeMainPage;
