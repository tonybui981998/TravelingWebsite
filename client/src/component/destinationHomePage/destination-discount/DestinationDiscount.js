import React from "react";
import "./DestinationDiscount.scss";
import { FaBeer } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

const DestinationDiscount = () => {
  return (
    <div className="destinationDiscount">
      <div className="discount-line"></div>
      <div className="discount-main-content">
        <div className="discount-title">
          {" "}
          Enter your email for a journey discount voucher.
        </div>
        <div className="discount-content">
          <input type="email" />
          <div className="discount-icon">
            <BsSendFill />
          </div>
        </div>
        <div className="infor">
          We hope you enjoy your time with us. Good luck in obtaining a free
          voucher for each journey.
        </div>
      </div>
    </div>
  );
};

export default DestinationDiscount;
