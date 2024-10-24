import React from "react";
import "./Destination.scss";
import dalang from "../../image/dalang.png";
import halong from "../../image/ha-long.png";
import hoian from "../../image/hoi an.png";
import hue from "../../image/Hue.png";
import ninhbinh from "../../image/Ninh-binh.png";
import phongnha from "../../image/Phongnha-ke bang.png";
import sapa from "../../image/sa-pa.png";
import { useNavigate } from "react-router-dom";
const Destination = () => {
  const navigate = useNavigate();
  const movetoDestination = () => {
    navigate("/our-destination");
    topPage();
  };
  const topPage = () => {
    document
      .getElementById("destinationPage")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="destination">
      <div className="detination-line">
        <div className="line"></div>
      </div>

      <h1>Our Destination</h1>
      <div className="destination-main-content">
        <div className="destination-content">
          <img src={dalang} alt="" />
          <div className="destination-name">Da-nang</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Da Nang is a central Vietnam coastal city known for My Khe Beach and
            the Dragon Bridge
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={halong} alt="" />
          <div className="destination-name">Ha-Long</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Ha Long is a northern Vietnam city known for its stunning Ha Long
            Bay and limestone islands
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={hoian} alt="" />
          <div className="destination-name">Hoi-An</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Hoi An is a central Vietnam city famous for its ancient town and
            lantern-lit streets
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={hue} alt="" />
          <div className="destination-name">Hue</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Hue is a central Vietnam city known for its historic citadel and
            imperial tombs
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={ninhbinh} alt="" />
          <div className="destination-name">Ninh-Binh</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Ninh Binh is a northern Vietnam province known for its stunning
            landscapes and ancient temples
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={dalang} alt="" />
          <div className="destination-name">Da-nang</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Da Nang is a central Vietnam coastal city known for My Khe Beach and
            the Dragon Bridge
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={phongnha} alt="" />
          <div className="destination-name">Phong Nha-Ke Bang</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Phong Nha-Ke Bang is a central Vietnam park famous for its caves and
            lush forests
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
        <div className="destination-content">
          <img src={sapa} alt="" />
          <div className="destination-name">Sapa</div>
          <div className="destination-line-inside"></div>
          <div className="destination-decription">
            Sapa is a northern Vietnam town known for its terraced rice fields
            and diverse ethnic cultures.
          </div>
          <button onClick={() => movetoDestination()}>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
