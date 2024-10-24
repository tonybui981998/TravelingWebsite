import React from "react";
import "./AboutusHeader.scss";
import { useNavigate } from "react-router-dom";

const AboutusHeader = () => {
  const navigation = useNavigate();
  const movetoDestination = () => {
    navigation("/our-destination");
  };
  return (
    <div className="about-usPage">
      <div className="h1">About Us</div>
      <div className="aboutus-content">
        <p>
          Welcome to our Vietnam travel guide. We showcase Vietnam's rich
          culture, stunning landscapes, and vibrant heritage. Join us to explore
          breathtaking destinations, hidden gems, and unique experiences.
          Discover the beauty and diversity of Vietnam, from majestic mountains
          to serene beaches. Let us guide you to the heart and soul of this
          amazing country.
        </p>
      </div>
      <div className="button">
        <button onClick={() => movetoDestination()}> Our Destinations</button>
      </div>
    </div>
  );
};

export default AboutusHeader;
