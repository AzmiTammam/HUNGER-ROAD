import React from "react";
import "./Partner.scss";
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
        <Link to="/ApplyPartner">Apply now!</Link>
      </div>
      <section class='FlexContainer'>
            <div>
              <img width="170px" src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/1_lbooe5.png" alt="s" />
              <h3>Additional revenue stream</h3>
              <p>Get more orders</p>
            </div>
            <div>
              <img width="170px" src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/2_tig14h.png" alt="s" />
              <h3>New customers</h3>
              <p>More visibility through the Hunger Road platform</p>
            </div>
            <div>
              <img width="170px" src="https://res.cloudinary.com/durpirilj/image/upload/v1638389409/partnerImg/3png_x38apu.png" alt="s" />
              <h3>Delivery, done</h3>
              <p>No more driver headaches</p>
            </div>
        </section>
    </div>
  );
}

export default Partner;
