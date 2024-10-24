import React from "react";
import NavBar from "../navBar/NavBar";
import DestinationHeader from "./destination-header/DestinationHeader";
import OurDestination from "./destination-ourdestination/OurDestination";
import DestinationDiscount from "./destination-discount/DestinationDiscount";
import Footer from "../footer/Footer";
import OurSuccess from "../homePage/ourSuccess/OurSuccess";

const DestinationHomePage = () => {
  return (
    <div>
      <NavBar />
      <DestinationHeader />
      <OurDestination />

      <OurSuccess />
      <Footer />
    </div>
  );
};

export default DestinationHomePage;
