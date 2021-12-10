import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Category from "./category";
import "./home.sass";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="HeaderHome">
          <h1>Order food to your door!</h1>
          <Link className="effectButton" to="/restaurants">
            Browse Stores List
          </Link>
        </div>
        <Category />
      </div>
      <Footer />
    </>
  );
}

export default Home;
