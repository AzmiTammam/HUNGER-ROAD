import React from "react";
import { Link } from "react-router-dom";
import './register.sass'

function register(){
      function showPassword() {
            let showPassword = document.getElementById("password1");
            let showPassword2 = document.getElementById("password2");
            if (showPassword.type === "password" && showPassword2.type ==="password") {
              showPassword.type = "text";
              showPassword2.type = "text";
            } else {
              showPassword.type = "password";
              showPassword2.type = "password";
            }
          }

      return(
            <div className="register">
                  <form>
                  <h1>Create an Account</h1>
                  <div className="fullName" >
                              <input type="text" name="firstName" id="firstName" placeholder="First Name" required/>
                              <input type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
                        </div>
                        <div className="register" >
                              <input type="email" name="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="passwords" >
                              <input type="password" name="password1" id="password1" placeholder="Password" required/>
                              <input type="password" name="password2" id="password2" placeholder="Confirm Password" required/>
                        </div>
                        <div className="showPassword">
                        <input type="checkbox" id="showPassword" onClick={showPassword} />
                        <label htmlFor="showPassword">Show Password</label>
                        </div>
                        <button type="submit" id="submitLogin">Register</button>
                        <div className="newAccount">
                        <span>Already have an account? <Link to="/login">Login</Link> </span>
                        </div>
                  </form>
            </div>
      )
}

export default register;