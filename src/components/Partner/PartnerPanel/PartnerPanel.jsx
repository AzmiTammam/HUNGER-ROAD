import React from "react";
import './partnerpanel.sass'

function PartnerPanel(){
      return(
            <div className="PartnerPanelContainer">
                  <div className="headingPartnerPanel">
                        <h1>
                        Partner Panel
                        </h1>

                  <div className="bodyPartnerPanel">
                  <form>
                        <div>
                              <input type="email" placeholder="Email..." id="email" required />
                        </div>
                        <div>
                              <input type="password" placeholder="Password..." id="password" required />
                        </div>
                        <input type="submit" value="Login" className="loginPartnerPanel" />
                  </form>
                  </div>
                  </div>
            </div>
      )
}

export default PartnerPanel