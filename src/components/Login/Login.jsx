import React from "react";
import { Link } from "react-router-dom";
import './login.sass'
import Navbar from "../navbar/Navbar";

function Login(){
      function showPassword() {
            let showPassword = document.getElementById("password");
            if (showPassword.type === "password") {
              showPassword.type = "text";
            } else {
              showPassword.type = "password";
            }
          }

      return(
            <div className="MainLogin">
                  <Navbar />
                  <form>
                  <h1>Login</h1>
                        <div className="loginDiv" >
                              <input type="email" name="email" id="email" placeholder="Email" required/>
                              <span class="bottom"></span>
                        </div>
                        <div className="loginDiv" >
                              <input type="password" name="password" id="password" placeholder="Password" required/>
                              <span class="bottom"></span>
                        </div>
                        <div className="containerPasswords">
                        <div className="showPassword">
                        <input type="checkbox" id="showPassword" onClick={showPassword} />
                        <label htmlFor="showPassword">Show Password</label>
                        </div>
                        <div className="forgotPassword">
                        <Link to="/login"><label>Forgot  password?</label></Link>
                        </div>
                        </div>
                        <button type="submit" id="submitLogin">Login</button>
                        <div className="newAccount">
                              <span>New to Hunger Road? <Link to="/register">Create an account</Link> </span>
                        </div>
                  </form>
            </div>
      )
}

export default Login;