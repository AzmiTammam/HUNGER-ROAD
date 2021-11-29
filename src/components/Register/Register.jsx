import React from "react";
import { Link } from "react-router-dom";
import './register.sass'

function register(){
      function showPassword() {
            let showPassword = document.getElementById("password");
            if (showPassword.type === "password") {
              showPassword.type = "text";
            } else {
              showPassword.type = "password";
            }
          }

      return(
            <div className="register">
                  <form>
                  <h1>Create an Account</h1>
                        <div className="register" >
                              <input type="email" name="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="register" >
                              <input type="password" name="password" id="password" placeholder="Password" required/>
                        </div>
                        <div className="showPassword">
                        <input type="checkbox" id="showPassword" onClick={showPassword} />
                        <label htmlFor="showPassword">Show Password</label>
                        </div>
                        <button type="submit" id="submitLogin">Login</button>
                        <div className="newAccount">
                        <span>Already have an account? <Link to="/login">Login</Link> </span>
                        </div>
                  </form>
            </div>
      )
}

export default register;