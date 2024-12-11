import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const NavBar = () => {
  const location = useLocation();
  // make state the color when click to page
  const [menuActive, setMenuActive] = useState("Home");
  // toggle state for menu
  const [isShowMenu, setIsShowMenu] = useState(false);
  // active color for menu
  const [userEmail, setUserEmail] = useState();

  // move to about us page

  // toggle menu for screen 940
  const toggle = () => {
    setIsShowMenu(!isShowMenu);
  };

  const logOutUser = () => {
    sessionStorage.removeItem("user");
    window.location.replace("/");
  };
  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    if (getUser) {
      const userToken = JSON.parse(getUser);
      setUserEmail(userToken);
      console.log(userToken.name);
    }
  }, []);
  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName === "/about-us") {
      setMenuActive("About-Us");
    }
    if (currentPathName === "/contact-us") {
      setMenuActive("Contact-Us");
    }
    if (currentPathName === "/our-destination") {
      setMenuActive("Destination");
    }
  }, [location]);
  return (
    <div
      className={`nav-bar ${isShowMenu === true ? "nav-bars" : ""}  `}
      id="destinationPage"
    >
      <div className="nav-h1" onClick={() => toggle()}>
        <h1>Viet Nam</h1>
        <span>
          <IoMenuSharp />
        </span>
      </div>
      <div className="nav-menu">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <div className={menuActive === "Home" ? "active" : ""}>Home</div>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/our-destination"}
        >
          <div className={menuActive === "Destination" ? "active" : ""}>
            Destination
          </div>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/about-us"}
        >
          <div className={menuActive === "About-Us" ? "active" : ""}>
            About Us
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/contact-us"}
        >
          <div className={menuActive === "Contact-Us" ? "active" : ""}>
            Contact Us
          </div>
        </Link>
      </div>
      {!userEmail ? (
        <div className="nav-button">
          <Link to={"/login"}>
            <button className="btn-login">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn-register">Register</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="nav-button">
            <div
              className="name-display"
              style={{
                fontSize: "23px",
                marginRight: "10px",
                fontWeight: "700",
                color: "#000000",
              }}
            >
              {" "}
              Welcome : {userEmail.name}
            </div>
            <button onClick={() => logOutUser()} className="btn-register">
              Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
