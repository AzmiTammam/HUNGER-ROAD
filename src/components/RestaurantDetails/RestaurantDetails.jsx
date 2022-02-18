import React from "react";
import "./RestaurantDetails.css";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function RestaurantDetails() {
  return (
    <>
      <Navbar />
      <div className="RestaurantDetails">
        <div className="restaurantTopContainer">
          <img
            src="https://images.deliveryhero.io/image/talabat/restaurants/kfc_big.gif?width=180"
            alt=""
          />
          <div className="restaurantInfo">
            <h5 className="title">KFC</h5>
            <p className="description">Fried Chicken, Sandwiches , American</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RestaurantDetails;
