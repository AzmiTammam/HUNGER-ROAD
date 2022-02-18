import React from "react";
import "./RestaurantDetails.css";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

function RestaurantDetails() {
  return (
    <>
      <Navbar />
      <div className="RestaurantDetails">
        <div className="restaurantTopContainer">
          <div className="firstContainer">
            <img
              src="https://images.deliveryhero.io/image/talabat/restaurants/kfc_big.gif?width=180"
              alt=""
            />
            <div className="restaurantInfo">
              <h5 className="title">KFC</h5>
              <p className="description">
                Fried Chicken, Sandwiches , American
              </p>
            </div>
          </div>
          <div className="twoContainer">
            <span>
              <FaCcVisa />
            </span>
            <span>
              <FaCcMastercard />
            </span>
            <span>
              <BsCashStack />
            </span>
          </div>
        </div>
        <div className="deliveryAlert">
          <div classname="alert alert-warning" role="alert">
            <span>
              <AiFillInfoCircle />
            </span>
            Delivered by us, with live tracking
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RestaurantDetails;
