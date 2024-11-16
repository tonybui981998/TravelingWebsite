import React from "react";
import "./OurSuccess.scss";
import oursuccess from "../../image/success-image.webp";

const OurSuccess = () => {
  return (
    <div className="oursuccess">
      <div className="lien">
        <div className="line"></div>
      </div>
      <div className="success-h1">Our Success</div>

      <img src={oursuccess} alt="" />
    </div>
  );
};

export default OurSuccess;
