import React from "react";
import "./NavigationHomePage.scss";
import { useNavigate } from "react-router-dom";
import navigationimage1 from "../../image/navigation-image1.webp";
import navigationdestinatiom from "../../image/navigation-destination.webp";
import navigationcontactus from "../../image/navigation-contactUs.webp";
import navigationaboutUs from "../../image/navigation-aboutUs.webp";

const NavigationHomePage = () => {
  const movePage = useNavigate();
  // move to destination
  const movetoDestination = () => {
    movePage("/our-destination");
  };
  // move to contact us
  const movetoContactUs = () => {
    movePage("/contact-us");
  };
  // move to about us
  const movetoAboutUs = () => {
    movePage("/about-us");
  };

  return (
    <div className="navigation-homepage">
      <div className="navigation-h1">
        <h1>Vietnam Adventures</h1>
      </div>
      <div className="navigation-content">
        <div onClick={() => movetoDestination()} className="nav-first">
          <img src={navigationimage1} alt="" />
          <div className="navigation-text">
            Experience the majestic landscapes of Vietnam, from Ha Long Bay to
            the mountains of Sapa. Join us in exploring these breathtaking
            sights!
          </div>
        </div>

        <div onClick={() => movetoDestination()} className="nav-first">
          <img src={navigationdestinatiom} alt="" />
          <div className="navigation-text">
            Explore Vietnam’s top destinations, from the sandy beaches of Phu
            Quoc to the historic streets of Hanoi and Hoi An. Find your perfect
            getaway!
          </div>
        </div>
        <div onClick={() => movetoContactUs()} className="nav-first">
          <img src={navigationcontactus} alt="" />
          <div className="navigation-text">
            Need help or have questions? Reach out to us! Our support team is
            here to ensure you have the best travel experience in Vietnam
          </div>
        </div>
        <div onClick={() => movetoAboutUs()} className="nav-first">
          <img src={navigationaboutUs} alt="" />
          <div className="navigation-text">
            We are passionate about travel and Vietnam. With our deep knowledge
            of the country, we provide you with the best information and
            services. Discover Vietnam with us!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHomePage;
