import React from "react";
import "./Footer.scss";
import { FaBeer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import flagimage from "../image/flagimage.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="footer-h1">Viet Nam</div>
        <img src={flagimage} alt="" />
      </div>
      <div className="footer-content">
        <div className="footer-main-content">
          <div className="footer-main-icon">
            <div className="footer-icon">
              <FaFacebook />
            </div>
            <div className="icon-name">FaceBook</div>
          </div>
          <div className="footer-main-icon">
            <div className="footer-icon">
              <FaGoogle />
            </div>
            <div className="icon-name">Google</div>
          </div>
          <div className="footer-main-icon">
            <div className="footer-icon">
              <IoLogoYoutube />
            </div>
            <div className="icon-name">Youtube</div>
          </div>
          <div className="footer-main-icon">
            <div className="footer-icon">
              <FaPhoneSquareAlt />
            </div>
            <div className="icon-name">Call Us</div>
          </div>
          <div className="footer-main-icon">
            <div className="footer-icon">
              <FaYahoo />
            </div>
            <div className="icon-name">Yahoo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
