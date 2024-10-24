import React from "react";
import "./OurTeam.scss";
import ceo from "../../image/ceo.webp";
import customer from "../../image/customer.webp";
import marketing from "../../image/maketing.webp";
import manager from "../../image/manager.webp";

const Ourteam = () => {
  return (
    <div className="ourteam">
      <div className="team-line"></div>
      <div className="team-title">Our Team</div>
      <div className="team-main-content">
        <div className="team-content">
          <div className="ourteam-image">
            <img className="img-team" src={ceo} alt="" />
          </div>

          <div className="team-name">Nguyễn Văn A </div>
          <div className="description-team">
            <p>
              {" "}
              Nguyễn Văn A, founder and CEO, has over 20 years of tourism
              experience and has driven the company's significant growth.
            </p>
          </div>
        </div>
        <div className="team-content">
          <div className="ourteam-image">
            <img className="img-team" src={marketing} alt="" />
          </div>

          <div className="team-name">Trần Thị B</div>
          <div className="description-team">
            <p>
              {" "}
              Trần Thị B, Marketing Manager, excels in brand building and
              advertising strategy, significantly enhancing the company's brand
              recognition.
            </p>
          </div>
        </div>
        <div className="team-content">
          <div className="ourteam-image">
            <img className="img-team" src={manager} alt="" />
          </div>

          <div className="team-name">Lê Văn C </div>
          <div className="description-team">
            <p>
              {" "}
              Lê Văn C is the Operations Manager, responsible for overseeing and
              managing the daily operations of the company. He excels in
              organization and management.
            </p>
          </div>
        </div>
        <div className="team-content">
          <div className="ourteam-image">
            <img className="img-team" src={customer} alt="" />
          </div>

          <div className="team-name">Phạm Thị D </div>
          <div className="description-team">
            <p>
              {" "}
              Phạm Thị D is the Customer Service Manager, always prioritizing
              customers and ensuring every experience is excellent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
