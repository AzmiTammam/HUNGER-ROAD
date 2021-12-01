import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './home.sass'

function Home() {
      return(
            <div className="home">
                  <Navbar />
                  <div className="HeaderHome">
                        <h1>Order food to your door!</h1>
                        <Link className="effectButton" to="/">Browse Stores List</Link>
                  </div>
            </div>
      )
}


export default Home