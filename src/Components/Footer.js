import React from 'react';
import '../Styles/Footer.css';
import instagram from '../Images/instagram.png';
import facebook from '../Images/facebook.png';
import youtube from '../Images/youtube.png';
import email from '../Images/email.png';
import linkedin from '../Images/linkedin.png';

//  Footer Updated 

function Footer() { 
  return (
    <div>
      <section class="footer">
      <div class="social-handles">
      <a href="https://www.instagram.com/semicolon_nitsgr/"><img className='img' src={instagram} /></a> 
        <a href="https://www.linkedin.com/company/semicolon-nitsgr/"><img className='img' src={linkedin} /></a>
        <a href="https://www.facebook.com/semicolonNIT"><img className='img' src={facebook} /></a>
        <a href="https://www.youtube.com"><img className='img' src={youtube} /></a>
      </div>

      <div class="line"></div>
      <p class="copyright">Copyright © 2022 Semicolon Coding Club, NIT Srinagar</p>

    </section>
    </div>
  )
}

export default Footer
