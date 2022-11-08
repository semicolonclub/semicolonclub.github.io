import React from 'react';
import '../Styles/Navbar.css';
import semicolon_logo from '../assets/semicolon_logo.png';
import NIT from '../assets/NIT.jpg'

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">  <div className='shrink'><img className='img_logo' src={semicolon_logo} /></div></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/HomePage">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/EventPage">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ResourcesPage">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/TeamPage">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUsPage">About us</a>
        </li>
        </ul>
        
      </div>
      <a className="navbar-brand" href="https://nitsri.ac.in/" target="_blank"><div className='shrink'><img className='img_logo' src={NIT} /></div></a>
    </div>
    
    

  </nav>
      )
} 

export default Navbar
