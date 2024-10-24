import React, { useContext, useEffect, useState } from "react";
import "./BookingDetails.scss";
import { ShopContext } from "../../shopContext/ShopContext";
import { format, differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const BookingDetails = () => {
  const { storeLocation, setStoreLocation } = useContext(ShopContext);
  const [currentDate, setCurrentDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndtDate] = useState();
  const [pickpeople, setpickpeople] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShowModel, setIsShowModel] = useState(false);
  const [userInfor, setUserInfo] = useState();
  const [findTotalDay, setFindTotalDay] = useState();

  const navigate = useNavigate();
  const movetoPaymentPage = () => {
    const bookingInfor = {
      startdate: startDate,
      enddate: endDate,
      totalpeople: pickpeople,
      totalprice: totalPrice,
    };
    setStoreLocation(bookingInfor);
    navigate("/payment-confirm");
  };
  const defaultValue = {
    isstart: true,
    isend: true,
    isPickPeople: true,
    ischekDate: true,
  };
  // check login or not
  const checkLogin = () => {
    const getName = sessionStorage.getItem("user");
    if (!getName) {
      toast.info("Please login for booking");
      return false;
    } else {
      return true;
    }
  };
  // get user
  const getUserName = () => {
    const getName = sessionStorage.getItem("user");
    const conVertName = JSON.parse(getName);
    setUserInfo(conVertName);
  };
  const [valueDefault, setDefaultValue] = useState(defaultValue);
  // check value input from user
  const checkValue = () => {
    if (!startDate) {
      setDefaultValue((prev) => ({
        ...prev,
        isstart: false,
      }));
      toast.warn("Please enter the date ");
      return false;
    }
    if (!endDate) {
      setDefaultValue((prev) => ({
        ...prev,
        isend: false,
      }));
      toast.warn("Please enter the date ");
      return false;
    }
    if (startDate > endDate) {
      setDefaultValue((prev) => ({
        ...prev,
        ischekDate: false,
      }));
      toast.warn("Please check the date");
      return false;
    }
    if (!pickpeople) {
      setDefaultValue((prev) => ({
        ...prev,
        isPickPeople: false,
      }));
      toast.warn("Please enter the people ");
      return false;
    }

    return true;
  };
  // booking button
  const bookingButton = () => {
    const check = checkValue();
    if (check === true) {
      getTotalPrice();
    }
  };
  //get current date
  const getCurrentDate = () => {
    const getDate = format(new Date(), "yyyy-MM-dd");
    setCurrentDate(getDate);
  };
  // open booking model
  const openModel = () => {
    const check = checkLogin();
    if (check === true) {
      const check = checkValue();
      if (check === true) {
        bookingButton();
        setIsShowModel(!isShowModel);
      }
    }
  };
  const closeModel = () => {
    setIsShowModel(false);
  };
  // caculator the total
  const getTotalPrice = () => {
    const dayNumber = differenceInDays(endDate, startDate);
    setFindTotalDay(dayNumber);
    console.log(dayNumber);
    const totalPeople = pickpeople;
    console.log(totalPeople);
    const pricePerPerson = storeLocation.price;
    console.log(pricePerPerson);
    const totalPrice = dayNumber * totalPeople * pricePerPerson;
    console.log(totalPrice);
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    getUserName();
    getCurrentDate();
  }, []);
  return (
    <div className="bookingDetails">
      <div className="booking-title">Welcome to {storeLocation.name}</div>

      <div className="booking-image">
        <img
          src={`http://localhost:8080/images/${storeLocation.image}`}
          alt=""
        />
      </div>
      <div className="booking-content">
        <div className="content-title">Place : {storeLocation.name}</div>
        <div className="content-price">
          Price per day: ${storeLocation.price}
        </div>
        <div className="content-date">
          From{" "}
          <input
            min={currentDate}
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            type="date"
          />{" "}
          to{" "}
          <input
            min={currentDate}
            value={endDate}
            onChange={(event) => setEndtDate(event.target.value)}
            type="date"
          />
        </div>
        <div className="content-number">
          How many people :{" "}
          <input
            value={pickpeople}
            onChange={(event) => setpickpeople(event.target.value)}
            type="text"
          />
        </div>
        <div className="content-description">
          Description: {storeLocation.description}
        </div>
        <div className="content-totalprice">Total Price: ${totalPrice}</div>
        <button onClick={() => bookingButton()}>Check Price</button>
        <button style={{ margin: "0 10px" }} onClick={() => openModel()}>
          Booking
        </button>
      </div>
      {isShowModel === true ? (
        <div className="centered-modal">
          <Modal.Dialog onClick={() => closeModel()}>
            <Modal.Header closeButton>
              <Modal.Title className="model-title">
                Booking Confirmation
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-Body ">
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "1%",
                }}
              >
                Email: {userInfor.email}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "1%",
                }}
              >
                Name: {userInfor.name}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "1%",
                }}
              >
                Total Day: {findTotalDay}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "1%",
                }}
              >
                Total People: {pickpeople}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "1%",
                }}
              >
                Total Price: ${totalPrice}
              </div>
            </Modal.Body>

            <Modal.Footer className="model-button">
              <Button
                style={{ cursor: "pointer" }}
                className="primary"
                onClick={() => movetoPaymentPage()}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookingDetails;
