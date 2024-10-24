import React from "react";
import PaywidthCard from "./PaywidthCard/PaywidthCard";
import FormCard from "./formCard/FormCard";
//import "./PayMentPage.scss";
const PatyMentPage = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: " #e6f2ff" }}
      className="payssss"
    >
      <PaywidthCard />
      <FormCard />
    </div>
  );
};

export default PatyMentPage;
