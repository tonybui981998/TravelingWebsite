import React from "react";
import "./ContactInformation.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactInformation = () => {
  const position = [21.03667, 105.83472];
  return (
    <div className="contact-information">
      <div className="map-information">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8917310041834!2d105.83492957601999!3d21.037017687493417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba3835c8991%3A0x2ee16c10705b2f1e!2zMSDEkC4gxJDhu5ljIEzhuq1wLCDEkGnhu4duIEJpw6puLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2snz!4v1720667238934!5m2!1sen!2snz"></iframe>
      </div>
      <div className="address-information">
        <div className="contact-title">Our Information </div>
        <div className="our-location">Company-Name: Viet Nam travel</div>
        <div className="our-location">
          Address: 1 Đ. Độc Lập, Quán Thánh, Ba Đình, Hà Nội, Vietnam{" "}
        </div>
        <div className="our-location">Phone : 911</div>
      </div>
    </div>
  );
};

export default ContactInformation;
