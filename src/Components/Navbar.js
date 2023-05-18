import React from "react";
import "../Styles/Navbar.css";
import semicolon_logo from "../assets/semicolon_logo.png";
import NIT from "../assets/NIT.jpg";
import { NavLink, Link } from "react-router-dom";


function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <a>
            <div className="shrink">
              <img className="img_logo" src={semicolon_logo} />
            </div>
          </a>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/" activeClassName="active" className="navlink">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/HomePage "
                >
                  Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/events" activeClassName="active" className="navlink">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Events
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/resources"
              activeClassName="active"
              className="navlink"
            >
              <li className="nav-item">
                <a className="nav-link" href="">
                  Resources
                </a>
              </li>
            </NavLink>
            <NavLink to="/team" activeClassName="active" className="navlink">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Team
                </a>
              </li>
            </NavLink>
            <NavLink to="/gallery" activeClassName="active" className="navlink">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Gallery
                </a>
              </li>
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="navlink">
              <li className="nav-item">
                <a className="nav-link" href="">
                  About us
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
        <a
          className="navbar-brand"
          href="https://nitsri.ac.in/"
          target="_blank"
        >
          <div className="shrink">
            <img className="img_logo" src={NIT} />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
