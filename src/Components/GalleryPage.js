import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pic2 from "../assets/pic2.jpg";

function GalleryPage() {
  return (
    <div>
      <div class="header">
        <h1>Gallery</h1>
        <p>Images that tell story</p>
      </div>

      <div class="row">
        <div class="column">
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
        </div>

        <div class="column">
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
        </div>

        <div class="column">
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
        </div>

        <div class="column">
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
          <div class="img-hover-zoom">
            <img src={pic2} style="width:100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
