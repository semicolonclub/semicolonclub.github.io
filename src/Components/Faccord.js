import React from "react";
import "../Styles/TeamSec.css";

function Faccord() {
  return (
    <div className="team_sec">
      <p className="teamsec_heading">
        {" "}
        <span className="red">Faculty</span> Co-ordinators
      </p>
      <div className="responsive-container-block">
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img src={require("../assets/Ahsaan.png")} class="team-img" />
            </div>
            <p class="text-blk name">Dr.Mohammad Ahsan Chishti</p>
            <p class="text-blk position">HOD & Associate Professor (CSE Dept)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img src={require("../assets/sparsh.png")} class="team-img" />
            </div>
            <p class="text-blk name">Dr.Sparsh Sharma</p>
            <p class="text-blk position">Assistant Professor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faccord;
