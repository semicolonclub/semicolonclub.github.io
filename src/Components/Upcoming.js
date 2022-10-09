import React from 'react';
import '../Styles/Upcoming.css';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

function Upcoming() {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel"ṅṅ >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <h3>UPCOMING EVENTS</h3>
    <div class="carousel-item active" data-bs-interval="4000">
      <img src={pic2} class="d-block w-100" alt="..." width="10" height="300" / >
      <div class="carousel-caption d-none d-md-block">
        <h5>ANIMIEA</h5>
        <p>A challenge for all the otakus!</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src={pic2} class="d-block w-100" alt="..." width="10" height="300"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>THE VIEW OF ZENITH</h5>
        <p>A platform for the students to think about the various aspects of the things happening around the world.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src={pic2} class="d-block w-100" alt="..." width="10" height="300"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>TECHSAPIANS</h5>
        <p>A monthly hackathon in which students will compete each other every month and will be ranked.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Upcoming
