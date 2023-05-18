import React from "react";
import "../Styles/TeamSec.css";
import { NavLink } from "react-router-dom";

function TeamSec() {
  return (
    <div className="team_sec">
      <p className="teamsec_heading"> <span className="red">Our</span>  Team</p>
      <div className="responsive-container-block">
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src={require("../assets/shiva.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Shiva Singh</p>
            <p class="text-blk position">Managing Director</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src={require("../assets/aman.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Aman Kumar</p>
            <p class="text-blk position">Secretary</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img
                src={require("../assets/sanna.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Sanna Showkat</p>
            <p class="text-blk position">Secretary, Content & Creative Team Lead</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/arnav.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Arnav Kashyap</p>
            <p class="text-blk position">Operations Team Lead</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/piyush.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Piyush Kumar</p>
            <p class="text-blk position">Associate Lead(Operations Team)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/shreyas.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Shreyash Pal</p>
            <p class="text-blk position">Associate Lead(Operations & Technical Team)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/ishika.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Ishika Gupta</p>
            <p class="text-blk position">Associate Lead(Operations Team & Content Team)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/rishab.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Rishabh Gaud</p>
            <p class="text-blk position">Technical Team Lead</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/pranav.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Pranav Sambyal</p>
            <p class="text-blk position">Technical Team Lead</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/basar.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Basar Qari</p>
            <p class="text-blk position">Associate Lead(Technical Team)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/sameer.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Syed Mohammed Sameer</p>
            <p class="text-blk position">Associate Lead(Technical Team)</p>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
            <img
                src={require("../assets/faizan.png")}
                class="team-img"
              />
            </div>
            <p class="text-blk name">Faizan Ali Mir</p>
            <p class="text-blk position">PR & Advisory Team Lead</p>
          </div>
        </div>
      </div>
      <NavLink to="/team">
        <button className="teamsec_btn">Meet Entire team</button>
      </NavLink>
    </div>
  );
}

export default TeamSec;

