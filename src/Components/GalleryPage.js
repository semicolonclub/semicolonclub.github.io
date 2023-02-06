import React from 'react';
import "../Styles/Gallery.css";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

function GalleryPage() {
  return (
    <div>
      <div className="header">
        <h1>Gallery</h1>
        <p>Images that tell story</p>
      </div>
      <div className="gallery_row">
        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic3} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic4} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic3} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic3} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic4} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic4} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic3} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
