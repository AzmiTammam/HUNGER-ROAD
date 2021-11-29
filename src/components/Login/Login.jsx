import React from "react";
import { Link } from "react-router-dom";
import './login.sass'

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
            <div className="login">
                  <form>
                  <h1>Login</h1>
                        <div className="login" >
                              <input type="email" name="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="login" >
                              <input type="password" name="password" id="password" placeholder="Password" required/>
                        </div>
                        <div className="showPassword">
                        <input type="checkbox" id="showPassword" onClick={showPassword} />
                        <label htmlFor="showPassword">Show Password</label>
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