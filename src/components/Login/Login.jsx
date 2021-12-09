import React from "react";
import { Link } from "react-router-dom";
import './login.sass'
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function Login(){
      function showPassword() {
            let showPassword = document.getElementById("password");
            if (showPassword.type === "password") {
              showPassword.type = "text";
            } else {
              showPassword.type = "password";
            }
          }

function popUpForgotPassword() {
      let forgotPassword = document.getElementById('popUpForgotPassword')

      if(forgotPassword.style.display === "none") {
            forgotPassword.style.display = "block"
      } else {
            forgotPassword.style.display = "none"
            
      }
}

      return(
            <>
                        <div className="MainLogin">
                  <Navbar />

                  <div className="containerLogn">

                  <div className="Container111">
                  <div class="MainLogLeft">
                  <img src="https://res.cloudinary.com/durpirilj/image/upload/v1638719585/partnerImg/5_bons8i.svg" width="450px" alt="img for login page" />
                  </div>
                  <form>
                  <h1>Sign in</h1>
                        <div className="loginDiv" >
                              <input type="email" name="email" id="email" placeholder="Email" required/>
                              <span class="bottom"></span>
                        </div>
                        <div className="loginDiv" >
                              <input type="password" name="password" id="password" placeholder="Password" required/>
                              <i class="fas fa-eye" onClick={showPassword}></i>
                              <span class="bottom"></span>
                        </div>
                        <div className="containerPasswords">
                        <div className="forgotPassword">
                        <a onClick={popUpForgotPassword}><label>Forgot password?</label></a>
                        <div className="popUpForgotPassword" id="popUpForgotPassword">
                              <h1>Forgot Password?</h1>
                              <form>
                                    <input type="email" placeholder="Enter your email here..." className="btn" />
                                    <button type="submit">Send Password!</button>
                              </form>
                              
                        </div>
                        </div>
                        </div>
                        <button type="submit" id="submitLogin">Login</button>
                        <div className="newAccount">
                              <span>New to Hunger Road? <Link to="/register">Create an account</Link> </span>
                        </div>
                  </form>
                  </div>

                  </div>

            </div>
      <Footer />
            </>
      )
}

export default Login;