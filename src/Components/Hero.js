import React from 'react';
import '../Styles/Hero.css';
import ScriptTag from 'react-script-tag';
const Demo = props => (
  <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" />
  <ScriptTag type="text/javascript" src="../Components/HeroScript.js" />
)


function Hero() {
  return (
    <div>
        <div class="top">
        <div class="logo">
            <img src="semicolon_logo.jpg" alt="logo" id="logo"/>
        </div>
        <div class="wrap">
            <div class="landing">
                <span class="changing_text"></span>
            </div>
        </div>
        <div class="upcoming">
            <a href="/" class="btn">Upcoming Events</a>
        </div>
    </div>
    </div>
  )
}

export default Hero
