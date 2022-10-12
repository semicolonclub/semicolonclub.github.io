import React,{ useEffect,useCallback,useState,useRef } from 'react';
import '../Styles/Hero.css';
import Typed from 'typed.js';
import logo from "../assets/hero.jpg";


function Hero() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings:["Welcome to Semicolon.","This is the official coding club of NIT Srinagar.","If you love coding,","You are at the right place."],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 11,
        smartBackspace: true,
        loop: true,
        showCursor: true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  

  return (
    <div>
       <div className="top">
        <div className="logo">
            <img src={logo} alt="logo" id="logo" />
        </div>
        <div className="wrap">
            <div className="landing">
                <span ref={el} className="changing_text"></span>
            </div>
        </div>
        <div className="upcoming">
            <a href="/" className="btn">Upcoming Events</a>
        </div>
    </div>

    </div>
  )
}

export default Hero
