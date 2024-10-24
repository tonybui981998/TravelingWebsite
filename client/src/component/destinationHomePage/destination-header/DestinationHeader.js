import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import destinationheader1 from "../../image/destination-header1.webp";
import destinationheader2 from "../../image/destination-header2.webp";
import destinationheader3 from "../../image/destination-header3.webp";
import destinationheader4 from "../../image/destination-header4.webp";
import "./DestinationHeader.scss";
import destinationheader5 from "../../image/destinationheader5.webp";

const DestinationHeader = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="destination">
      <Carousel
        transitionDuration={1500}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        responsive={responsive}
      >
        <div>
          <img src={destinationheader1} alt="" />
        </div>
        <div>
          {" "}
          <img src={destinationheader2} alt="" />
        </div>
        <div>
          {" "}
          <img src={destinationheader3} alt="" />
        </div>
        <div>
          {" "}
          <img src={destinationheader4} alt="" />
        </div>
        <div>
          {" "}
          <img src={destinationheader5} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default DestinationHeader;
