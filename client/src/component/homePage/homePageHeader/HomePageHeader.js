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
        <Link to={"/about-us"}>
          <button
            style={{
              fontFamily: "Playfair Display, serif",
              color: "black",
              fontWeight: "700",
            }}
            className="about-us"
          >
            About Us
          </button>
        </Link>

        <Link to={"our-destination"}>
          <button
            style={{
              fontFamily: "Playfair Display, serif",
              color: "black",
              fontWeight: "700",
            }}
            className="destination"
          >
            Destination
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageHeader;
