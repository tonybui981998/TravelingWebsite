import React from "react";
import "./HomePageHeader.scss";
import imageheader from "../../image/image-header.webp";
import { Link } from "react-router-dom";

const HomePageHeader = () => {
  return (
    <div className="home-header">
      <div className="header-h1">Viet Nam</div>
      <div className="header-text">
        <p>
          Welcome to Vietnam Travel! Discover the majestic beauty of Vietnam,
          from stunning beaches and lush rainforests to rich cultural heritage.
          Join us for unforgettable journeys and unique experiences. Explore the
          heart of Vietnam with us!
        </p>
      </div>

      <div className="header-button">
        <Link style={{ fontFamily: "cursive" }} to={"/about-us"}>
          <button style={{ fontFamily: "cursive" }} className="about-us">
            About Us
          </button>
        </Link>

        <button className="destination">Destination</button>
      </div>
    </div>
  );
};

export default HomePageHeader;
