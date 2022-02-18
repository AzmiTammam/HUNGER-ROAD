import react from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./profile.css";
import person from "./images/person.png";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container profileCon">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/home">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-4 col-sm-12 containerProfileOne text-center">
            <div className="info">
              <div className="info-heading">
                <img
                  src={person}
                  width="150px"
                  alt="Person icon profile picture"
                />
              </div>
              <div className="info-body">
                <h3>${`name`}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 containerProfileTwo text-center">
            <div className="editInfo text-left">
              <label htmlFor="nameOfUser">Name:</label>
              <input type="text" id="nameOfUser" disabled />
              <label htmlFor="Email">Email:</label>
              <input type="text" id="Email" disabled />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" disabled />
              <label htmlFor="Password">Password:</label>
              <input type="text" id="Password" disabled />
              <label htmlFor="country">Country:</label>
              <select name="country" id="country" disabled="disabled">
                <option value="Amman">Amman</option>
                <option value="Amman">Irbid</option>
                <option value="Amman">Aqaba</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
