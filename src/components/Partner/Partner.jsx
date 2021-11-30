import React from "react";
import "./Partner.sass";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Partner() {
  return (
    <div className="partner">
      <Navbar />
      <h1>Partner with Market Leaders</h1>
      <h2>get more sales</h2>

      <div className="partnerContainer">
        <ul className="progressbar">
          <li>Submit your information</li>
          <li>Our team will contact you</li>
          <li>Setup your company profile</li>
          <li className="active"> Start receiving more orders</li>
        </ul>
      </div>

      <div className="partner-body">
        <Link to="/ApplyPartner">Apply now</Link>
      </div>
    </div>
  );
}

export default Partner;
