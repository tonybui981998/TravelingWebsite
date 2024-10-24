import React, { useContext } from "react";
import { ShopContext } from "../shopContext/ShopContext";
import NavBar from "../navBar/NavBar";
import BookingDetails from "./bookingDetails/BookingDetails";

const MakeBookingMain = () => {
  return (
    <div>
      <NavBar />
      <BookingDetails />
    </div>
  );
};

export default MakeBookingMain;
