import React, { useContext, useEffect, useState } from "react";
import "./FormCard.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../../shopContext/ShopContext";
import { getPaymentDone } from "../../service/Service";

const FormCard = () => {
  const [cartNumber, setCartNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [security, setSecurity] = useState();
  const [cartHolder, setCartHolder] = useState();
  const [tick, setTick] = useState(true);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [payMentStatus, setPayMentStatus] = useState("Done");
  const { storeLocation } = useContext(ShopContext);

  const cardNumberFormat = /^\d{4}-\d{4}-\d{4}-\d{2}$/;
  const expiryFormat = /^\d{2}\/\d{2}$/;
  const securityFormat = /^\d{3}$/;
  //console.log(storeLocation);
  const defaultValue = {
    isCartNumber: true,
    isExpiryDate: true,
    isSecurity: true,
    isCartHolder: true,
    isUserName: true,
    isUserEmail: true,
    isUserAddress: true,
  };
  const [checkDefaultValue, setCheckDefaultValue] = useState(defaultValue);
  const checkValue = () => {
    if (!cartNumber) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isCartNumber: false,
      }));
      toast.warn("Please enter the card number");
      return false;
    }
    if (!cardNumberFormat.test(cartNumber)) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isCartNumber: false,
      }));
      toast.warn("Please enter the correct format");
      return false;
    }
    if (!expiryDate) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isExpiryDate: false,
      }));
      toast.warn("Please enter the expiry date");
      return false;
    }
    if (!expiryFormat.test(expiryDate)) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isExpiryDate: false,
      }));
      toast.warn("Please enter the correct format for expiry date");
      return false;
    }
    if (!security) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isExpiryDate: false,
      }));
      toast.warn("Please enter the security code");
      return false;
    }
    if (!securityFormat.test(security)) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isExpiryDate: false,
      }));
      toast.warn("Please enter the correct security code");
      return false;
    }
    if (!cartHolder) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isCartHolder: false,
      }));
      toast.warn("Please enter the card holder");
      return false;
    }
    if (!userName) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isUserName: false,
      }));
      toast.warn("Please enter the billing name");
      return false;
    }
    if (!userEmail) {
      setCheckDefaultValue((prev) => ({
        ...prev,
        isUserEmail: false,
      }));
      toast.warn("Please enter the email");
      return false;
    }
    return true;
  };
  const navigate = useNavigate();
  // get user
  const getUser = () => {
    const UserString = sessionStorage.getItem("user");
    const getUser = JSON.parse(UserString);
    if (!UserString) {
      navigate("/our-destination");
    } else {
      setUserName(getUser.name);
      setUserEmail(getUser.email);
    }
  };
  // sumit to done payment
  const donePayment = async () => {
    const check = checkValue();
    if (check === true) {
      const payMentInfor = {
        startdate: storeLocation.startdate,
        enddate: storeLocation.enddate,
        people: storeLocation.totalpeople,
        price: storeLocation.totalprice,
        userName: userName,
        userEmail: userEmail,
        status: payMentStatus,
      };
      // console.log(payMentInfor);
      let sendRequest = await getPaymentDone(payMentInfor);
      if (sendRequest.data.DC === 0) {
        navigate("/payment");
      } else {
        toast.error("Sorry payment failed");
      }
    }
  };
  // change tick
  const changeTick = () => {
    setTick((prev) => {
      const newTick = !prev;
      console.log(newTick);
      return newTick;
    });
  };

  // move back
  const moveBack = () => {
    navigate("/our-destination");
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="formcard">
      <div className="main-formcard">
        <div className="form-content">
          <label>Card Number:</label>
          <br />
          <input
            value={cartNumber}
            onChange={(event) => setCartNumber(event.target.value)}
            placeholder="1234-5678-9123-00"
            type="text"
          />
        </div>
        <div className="form-content1">
          <div className="expiry">
            {" "}
            <label>Expiry date:</label>
            <br></br>
            <input
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
              placeholder="00/00"
              type="text"
            />
          </div>
          <div className="expiry">
            {" "}
            <label>Security:</label>
            <br />
            <input
              value={security}
              onChange={(event) => setSecurity(event.target.value)}
              placeholder="000"
              type="text"
            />
          </div>
        </div>
        <div className="form-content">
          <label>Card holder:</label>
          <br />
          <input
            value={cartHolder}
            onChange={(event) => setCartHolder(event.target.value)}
            type="text"
          />
        </div>
      </div>

      <div className="formcard-bill">
        <div className="bill-title">Billing Address</div>
        <div className="checkbox">
          {" "}
          <input
            onClick={() => changeTick()}
            className="check"
            type="checkbox"
          />{" "}
          <span>Same as account address </span>
        </div>
        {tick === false ? (
          <>
            <div className="billing-form">
              <label>Name:</label>
              <br />
              <input value={userName} disabled type="text" />
            </div>
            <div className="billing-form">
              <label>Email:</label>
              <br />
              <input disabled value={userEmail} type="email" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="button">
        <button onClick={() => moveBack()} className="cancel">
          Cancel
        </button>
        <button onClick={() => donePayment()} className="pay">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormCard;
