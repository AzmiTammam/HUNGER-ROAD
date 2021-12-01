import React from "react";
import Navbar from "../navbar/Navbar";
import "./rider.sass";
import { Link } from "react-router-dom";

function Rider() {
  return (
    <div className="RiderContainer">
      <Navbar />
      <div className="RiderHeading">
        <h3  className="animate__animated animate__backInLeft" >Wanna join our</h3>
        <h1 className="animate__animated animate__backInLeft">Delivery Riders fleet?</h1>
      </div>
      <Link to="/rider"className="RiderButton" >YEAAAAAA !</Link>
    </div>
  );
}

export default Rider;
