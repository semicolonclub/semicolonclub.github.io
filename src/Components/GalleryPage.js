import React from 'react';
import "../Styles/Gallery.css";
import fig1 from "../assets/gallery_img/fig1.JPG";
import fig2 from "../assets/gallery_img/fig2.jpeg";
import fig3 from "../assets/gallery_img/fig3.jpeg";
import fig4 from "../assets/gallery_img/fig4.jpeg";
import fig5 from "../assets/gallery_img/fig5.jpeg";
import fig6 from "../assets/gallery_img/fig6.jpeg";
import fig7 from "../assets/gallery_img/fig7.jpeg";
import fig8 from "../assets/gallery_img/fig8.jpeg";
import fig9 from "../assets/gallery_img/fig9.JPG";

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
            <img src={fig1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig2} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig3} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={fig4} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig5} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig6} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={fig7} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig8} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig4} style={{ width: "100%" }} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={fig6} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig3} style={{ width: "100%" }} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={fig2} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
