/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.sass";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#DE523D" }}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
              Your everyday, right away!
              </h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a> 
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
  
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a className="ins-ic">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className="container text-center text-md-left mt-5">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 className="text-uppercase font-weight-bold">Hunger Road</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
            Your everyday, right away Order food and grocery delivery online from hundreds of restaurants and shops.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
            <Link to="/home">Home</Link>
            </p>
            <p>
            <Link to="/home">Sign up</Link>
            </p>
            <p>
            <Link to="/rider">Become a driver</Link>
            </p>
            <p>
            <Link to="/partner">Become a partner</Link>
            </p>
            <p>
              <Link to="/home">Feedback</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <Link to="/profile">Your Account</Link>
            </p>
            <p>
              <Link to="/home">Terms</Link>
            </p>
            <p>
              <Link to="/home">FAQ</Link>
            </p>
            <p>
              <Link to="/home">Privacy</Link>
            </p>
            <p>
              <Link to="/Contact">Contact Us</Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p> <i className="fas fa-home mr-3" /> Amman, Jordan </p>
            <p> <i className="fas fa-envelope mr-3" /> info@example.com </p>
            <p> <i className="fas fa-phone mr-3" /> + 962 234 567 88 </p>
          </div>
          
        </div>
      
      </div>
      <div className="footer-copyright text-center py-3">
            Developed and Designed by<a href="https://twitter.com/azzmmii"> AzmiTammam</a> &copy; 2022 All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
