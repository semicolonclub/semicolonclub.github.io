import React from "react";
import "../Styles/Upcoming.css";
import pic2 from "../assets/pic2.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Upcoming() {
  return (
    
    <div>
      <Navbar/>
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
            <h1 >Upcoming Events</h1>
          </div>
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={pic2}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>ANIMIEA</h5>
              <p>A challenge for all the otakus!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={pic2}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>THE VIEW OF ZENITH</h5>
              <p>
                A platform for the students to think about the various aspects
                of the things happening around the world.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={pic2}
              className="d-block w-100"
              alt="..."
              width="10"
              height="300"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>TECHSAPIANS</h5>
              <p>
                A monthly hackathon in which students will compete each other
                every month and will be ranked.
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
}

export default Upcoming;
