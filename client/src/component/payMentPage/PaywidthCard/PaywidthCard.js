import React from "react";
import "./PaywidthCard.scss";
import { FaBeer } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

const PaywidthCard = () => {
  return (
    <div className="paywidthcard">
      <div className="pay-title">Viet Nam Travel</div>
      <div className="pay-card">
        Pay width Card{" "}
        <span>
          <FaCreditCard />
        </span>
      </div>
    </div>
  );
};

export default PaywidthCard;
