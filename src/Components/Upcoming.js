import React from "react";
import "../Styles/Upcoming.css";
import banner1 from "../assets/upcoming_banners/banner1.jpg";
import banner9 from "../assets/upcoming_banners/banner9.jpeg";
import banner10 from "../assets/upcoming_banners/banner10.jpg";
import Navbar from "./Navbar";



function Upcoming() {
  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="upcoming_heading">
            <h1>Upcoming Events</h1>
          </div>
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={banner1}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>EXORDIUM 3.0</h5>
              <p>
                BOOST UP TechSavy’s!Exordium 3.O, organized by Semicolon, the
                official coding club of NIT Srinagar, is set to become the
                largest technical fest in the Kashmir valley. This 3-4 day event
                will feature a diverse range of both technical and non-technical
                activities, catering to a wide audience. Attendees can expect a
                plethora of engaging events and competitions that showcase the
                latest advancements in technology and foster innovation. With a
                focus on fostering learning, collaboration, and creativity,
                Exordium 3.O promises to be an exciting platform for students
                and enthusiasts from whole Kashmir valley to explore and
                showcase their talents in the field of technology.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={banner10}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>EXTRACTION</h5>
              <p>
                We would like to bring it to your notice thatSemicolon, the
                official coding club of NIT Srinagar is going to organize
                ‘TREASURE HUNT’ – EXTRACTION.A challenge open for all, showcase
                your resourcefulness, aptitude, general knowledge, and
                out-of-the-box thinking whole across the NIT Sri campus.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={banner9}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>TECHSAPIENS 2.0</h5>
              <p>
                GEAR UP Techsapiens!SEMICOLON, the official coding club of NIT
                Srinagar is again delighted to announce their flagship
                competitive programming event “TECHSAPIENS 2.0”.A semester long
                coding challenge for all the tech geeks, a chance to be “CODER
                OF THE SEMESTER”, win exciting prizes, official certificate of
                Semicolon and LOR.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Upcoming;
