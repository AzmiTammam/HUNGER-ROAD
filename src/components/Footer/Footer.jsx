import React from "react";
import './footer.sass'
import { Link } from "react-router-dom";


function Footer(){
      return(
            <footer>
                  <section className="footerLinks">
                  <Link to="/">Feedback</Link>
                  <Link to="/">Careers</Link>
                  <Link to="/">Terms</Link>
                  <Link to="/">FAQ</Link>
                  <Link to="/">Privacy</Link>
                  <Link to="/">Contact Us</Link>
                  </section>
                  <div className="footerContainer">
                        <div className="downloadApps">
                        <h2>Download the App</h2>
                        <img src="https://res.cloudinary.com/durpirilj/image/upload/v1638313972/logo_playstore_pmrmge.svg" width="200px" alt="Download App from AppStore" />
                        <br />
                        <img src="https://res.cloudinary.com/durpirilj/image/upload/v1638313972/logo_appstore_rpdtgi.svg" width="200px" alt="Download App from AppStore" />
                        </div>
                        <div className="footerInfo">
                              test
                              test
                              test
                        </div>
                        <div className="middleFooter">
                              asdasdasdasdasdasdasd
                        </div>

                        
                  </div>
            </footer>
      )
}

export default Footer