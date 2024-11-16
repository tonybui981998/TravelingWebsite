import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TfiImport } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import "./AdminHomePage.scss";
import UserManagement from "../userManagement/UserManagement";
import ImportDestination from "../importDestination/ImportDestination";
import DestinationDisplay from "../destinationDisplay/DestinationDisplay";
import PaymentHistory from "../paymentHistory/PaymentHistory";

const AdminHomePage = () => {
  const [adminDisPlay, setAdminDisplay] = useState("userManagement");
  const movePage = (pageSelect) => {
    setAdminDisplay(pageSelect);
  };
  // log out
  const logoutAdmin = () => {
    sessionStorage.removeItem("user");
    window.location.replace("/login");
  };

  return (
    <div className="adminpage">
      <div className="adminMenu">
        {" "}
        {adminDisPlay === "userManagement" ? (
          <div className="active" onClick={() => movePage("userManagement")}>
            <span>
              <FaUserCircle />
            </span>
            User Management
          </div>
        ) : (
          <div onClick={() => movePage("userManagement")}>
            <span>
              <FaUserCircle />
            </span>
            User Management
          </div>
        )}
        {adminDisPlay === "importPlace" ? (
          <div className="active" onClick={() => movePage("importPlace")}>
            <span>
              <TfiImport />
            </span>
            Import Place
          </div>
        ) : (
          <div onClick={() => movePage("importPlace")}>
            <span>
              <TfiImport />
            </span>
            Import Place
          </div>
        )}
        {adminDisPlay === "destination" ? (
          <div onClick={() => movePage("destination")} className="active">
            <span>
              <FaLocationDot />
            </span>
            Destination
          </div>
        ) : (
          <div onClick={() => movePage("destination")}>
            <span>
              <FaLocationDot />
            </span>
            Destination
          </div>
        )}
        {adminDisPlay === "paymentHistory" ? (
          <div onClick={() => movePage("paymentHistory")} className="active">
            <span>
              <FaLocationDot />
            </span>
            paymentHistory
          </div>
        ) : (
          <div onClick={() => movePage("paymentHistory")}>
            <span>
              <FaLocationDot />
            </span>
            paymentHistory
          </div>
        )}
        <div onClick={() => logoutAdmin()}>
          <span>
            <IoHome />
          </span>{" "}
          Log out
        </div>
      </div>
      <div className="admindisplay">
        {adminDisPlay === "userManagement" && <UserManagement />}
        {adminDisPlay === "importPlace" && <ImportDestination />}
        {adminDisPlay === "destination" && <DestinationDisplay />}
        {adminDisPlay === "paymentHistory" && <PaymentHistory />}
      </div>
    </div>
  );
};

export default AdminHomePage;
