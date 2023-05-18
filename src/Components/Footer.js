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
      <section className="footer">
        <div className="line"></div>
        <div className="social-handles">
          <a href="https://www.instagram.com/semicolon_nitsgr/">
            <img className="img" alt="instaImg" src={instagram} />
          </a>
          <a href="https://www.linkedin.com/company/semicolon-nitsgr/">
            <img className="img" alt="linkedinImg" src={linkedin} />
          </a>
          <a href="https://www.facebook.com/semicolonNIT">
            <img className="img" alt="fbImg" src={facebook} />
          </a>
          <a href="https://www.youtube.com/@semicolonnitsrinagar8195">
            <img className="img" alt="youtubeImg" src={youtube} />
          </a>
        </div>

        <p className="copyright">
          Copyright © 2022 Semicolon Coding Club, NIT Srinagar
        </p>
      </section>
    </div>
  );
}

export default Footer
