import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/AboutUs.css";

function AboutUsPage() {
  return (
    <div>
      <section id="ABOUT">
      <div class="about-1">
        <h1>About Us</h1>
        <p>
          sint Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          optio sectetur minima soluta nulla, alias tenetur doloribus vitae quo
          eaque, quae illo!fugit tempora ipsum maiores dolorum enim, beatae qui
          quasisint Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus optio sectetur minima soluta nulla, alias tenetur doloribus
          vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim,
          beatae qui quasi
        </p>
      </div>
      <div id="about-2">
        <div class="content-box-lg">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="about-item text-center">
                  <i class="fa fa-book"></i>
                  <h3>MISSION</h3>
                  <hr />
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consealias tenetur doloribus
                    vitae quo eaque, quae illo!fugit tempora ipsum maiores
                    dolorum enim, beatae qui quasialias tenetur doloribus vitae
                    quo eaque, quae illo!fugit tempora ipsum maiores dolorum
                    enim, beatae qui quasictetur adipisicing elit. Ducimus optio{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="about-item text-center">
                  <i class="fa fa-globe"></i>
                  <h3>VISSION</h3>
                  <hr />
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus optio sectetur minima soluta nulla, alias tenetur
                    doloribus vitae quo eaque, quae illo!fugit tempora ipsum
                    maiores dolorum enim, beatae qui quasialias tenetur
                    doloribus vitae quo eaque, quae illo!fugit tempora ipsum
                    maiores{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="about-item text-center">
                  <i class="fa fa-pencil"></i>
                  <h3>ACHIEVEMENTS</h3>
                  <hr />
                  <p>
                    {" "}
                    sint Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ducimus optio sectetur minima soluta doloribus vitae
                    quo eaque, quae illo!fugit tempora ipsum maiores dolorum
                    enim, be doloribus vitae quo eaque, quae illo!fugit tempora
                    ipsum maiores dolorum enim, beatae qui quasi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
