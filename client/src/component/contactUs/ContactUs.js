import React from "react";
import NavBar from "../navBar/NavBar";
import ContactHeader from "./contactHeader/ContactHeader";
import ContactInformation from "./contactinformation/ContactInformation";
import MakeRequirements from "./makeRequirements/MakeRequirements";
import Footer from "../footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactInformation />
      <MakeRequirements />
      <Footer />
    </div>
  );
};

export default ContactUs;
