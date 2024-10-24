import React, { useEffect } from "react";
import "./PaymentDone.scss";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import successImage from "../../component/image/successImage.webp";

const PaymentDone = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "45px auto",
    color: "black",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const backtoHomepage = () => {
    window.location.replace("/");
  };
  return (
    <>
      {loading === false ? (
        <div className="paymentdone">
          <div className="paymemtdone-title">Payment Success</div>
          <div className="paymemtdone-thank">Thank you for choosing us</div>
          <div>
            <img src={successImage} alt="" />
          </div>
          <button onClick={() => backtoHomepage()}>HomePage </button>
        </div>
      ) : (
        <div className="payment-done">
          It won't take long , Please don't turn off the Page
        </div>
      )}

      <PacmanLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={130}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default PaymentDone;
