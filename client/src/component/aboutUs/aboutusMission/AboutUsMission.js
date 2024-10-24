import React from "react";
import "./AboutUsMission.scss";
import missionimage from "../../image/ceo.webp";
import team from "../../image/team.webp";
import tour from "../../image/tour.webp";
import story from "../../image/story.webp";

const AboutUsMission = () => {
  return (
    <div className="ourmission">
      <div className="ourmission-content">
        <div className="mission-content1">
          <div className="mission-title">Our Mission</div>
          <div className="mission-image">
            <img src={missionimage} alt="" />
          </div>
          <div className="content-p ">
            <p>
              We aim to showcase Vietnam's rich culture, stunning landscapes,
              and vibrant heritage. Our mission is to provide authentic
              experiences that reveal the true essence of Vietnam, guiding
              travelers to discover its hidden gems and unforgettable
              destinations.
            </p>
          </div>
        </div>
        <div className="mission-content1">
          <div className="mission-title">Our Team</div>
          <div className="mission-image">
            <img src={team} alt="" />
          </div>
          <div className="content-p ">
            <p>
              Our passionate travel experts and local guides are dedicated to
              making your journey through Vietnam unforgettable. With deep
              knowledge and love for the country, we provide personalized and
              insightful travel experiences.
            </p>
          </div>
        </div>
        <div className="mission-content1">
          <div className="mission-title">Our Tours</div>
          <div className="mission-image">
            <img src={tour} alt="" />
          </div>
          <div className="content-p ">
            <p>
              We offer diverse tours that highlight Vietnam's beauty and
              diversity. From bustling cities to tranquil beaches, our
              thoughtfully planned tours cater to all interests, ensuring a
              balanced and enriching travel experience.
            </p>
          </div>
        </div>
        <div className="mission-content1">
          <div className="mission-title">Our Story</div>
          <div className="mission-image">
            <img src={story} alt="" />
          </div>
          <div className="content-p ">
            <p>
              Founded by travel enthusiasts and local experts, we aim to share
              Vietnam's beauty with the world. Our love for the country's
              history, culture, and natural wonders drives us to create unique
              and memorable travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMission;
