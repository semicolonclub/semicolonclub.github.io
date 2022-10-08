import React from 'react';
import '../Styles/Navbar.css';
import semicolon_logo from '../Images/semicolon_logo.png';
import NIT from '../Images/NIT.jpg'

function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">  <div className='shrink'><img className='img_logo' src={semicolon_logo} /></div></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{"<"}Home{">"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{"<"}Events{">"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{"<"}Resources{">"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{"<"}Team{">"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{"<"}Gallery{">"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{"<"}About us{">"}</a>
        </li>
        </ul>
        
      </div>
      <a class="navbar-brand" href="https://nitsri.ac.in/" target="_blank"><div className='shrink'><img className='img_logo' src={NIT} /></div></a>
    </div>
    
    

  </nav>
      )
} 

export default Navbar
