import React from "react";
import "./ContactHeader.scss";

const ContactHeader = () => {
  const movetomakeArequirements = () => {
    document
      .getElementById("scrool-to-makerequirements")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="contact-header">
      <div className="contact-title">Viet Name Travel</div>
      <div className="contact-p">
        We are dedicated to assisting you in your journey through the beauty of
        Vietnam. For any inquiries, feedback, or requests, please reach out. Our
        team is here to ensure your travel experience is seamless and memorable.
      </div>
      <div className="contact-button">
        <button onClick={() => movetomakeArequirements()}>
          Make Requirement
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
