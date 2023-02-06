import React from 'react';
import pic2 from "../assets/pic2.jpg";

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
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div clasName="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
          <div className="img-hover-zoom">
            <img src={pic2} style={{width:"100%"}} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
