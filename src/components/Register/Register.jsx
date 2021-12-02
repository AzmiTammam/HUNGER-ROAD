import React from "react";
import { Link } from "react-router-dom";
import "./register.sass";
import Navbar from "../navbar/Navbar";

function register() {
  function showPassword() {
    let showPassword = document.getElementById("password1");
    let showPassword2 = document.getElementById("password2");
    if (showPassword.type === "password" && showPassword2.type === "password") {
      showPassword.type = "text";
      showPassword2.type = "text";
    } else {
      showPassword.type = "password";
      showPassword2.type = "password";
    }
  }

  return (
    <div className="MainRegister">
      <Navbar />
      <div className="registerContainer">
        <form>
          <h1>Create an Account</h1>
          <div className="RegisterFullNameDiv">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="RegisterEmailDiv">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="RegisterPasswordsDiv">
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="RegisterPhoneDiv">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              minLength="9"
              maxLength="14"
              required
            />
          </div>
          <div className="AcceptTermsDiv">
            <input type="checkbox" name="terms" id="AcceptTerms" required/> I agree with <Link to="/">Terms</Link> and <Link to="">Privacy</Link>
          </div>
          <div className="RegisterShowPasswordDiv">
            <input type="checkbox" id="showPassword" onClick={showPassword} />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button class="buttonRegister" type="submit" id="submitLogin">
            Register
          </button>
          <div className="RegisterNewAccountDiv">
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
