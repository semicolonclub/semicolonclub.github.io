import React from 'react';
import '../Styles/Footer.css';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';

//  Footer Updated 

function Footer() { 
  return (
    <div>
      <section class="footer">
      <div class="line"></div>
      <div class="social-handles">
      <a href="https://www.instagram.com/semicolon_nitsgr/"><img className='img' src={instagram} /></a> 
        <a href="https://www.linkedin.com/company/semicolon-nitsgr/"><img className='img' src={linkedin} /></a>
        <a href="https://www.facebook.com/semicolonNIT"><img className='img' src={facebook} /></a>
        <a href="https://www.youtube.com"><img className='img' src={youtube} /></a>
      </div>

      
      <p class="copyright">Copyright © 2022 Semicolon Coding Club, NIT Srinagar</p>

    </section>
    </div>
  )
}

export default Footer
