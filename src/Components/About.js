import React,{ useEffect } from 'react';
import pic1 from "../assets/semicolon.png";
import '../Styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='parent'>
       <div className='container'>   
           <div className='flex' data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
              <img className='who_img' src={pic1} alt="" />
              <div>
              <div className='heading'>
            <h1>Who we are?</h1>
           </div>
              <p className='description'>Semicolon is the official coding club of National Institute of Technology Srinagar, a prestigious 
technical institute in India, founded in a Summer of 2017, By Varun Dev, Zaki Akmal, Ashish Kumar 
and Shivang Khajuria, under Dr. Ahsan Chishti. Comprised of passionate programmers, developers, 
and technology enthusiasts, we come together to foster a vibrant coding culture within our campus. 
Semicolon serves as a platform for students to enhance their coding skills, explore new technologies, 
and collaborate on innovative projects. The whole team skilled in management, technical, content 
and graphics designing, works together as a single unit for the betterment of students society at NIT 
Srinagar.
</p>
              </div>
           </div>
           <div className='flex1' data-aos="flip-down" data-aos-easing="linear" data-aos-duration="1500">
              <div>
              <div className='heading'>
            <h1>What we do?</h1>
           </div>
              <p className='description'>Semicolon is the official coding club of NIT Srinagar.Our club is dedicated to promoting and 
enhancing coding skills among students. We provide a platform for students to learn, collaborate, 
and excel in the field of computer programming. Through workshops, coding competitions, and 
coding challenges, we aim to foster a vibrant coding culture within our college community. Our 
club also organizes Non-Technical events, guest lectures and coding boot camps to facilitate 
knowledge sharing and skill development. Whether you are a beginner or an experienced coder, 
Semicolon offers a supportive and inclusive environment to explore new technologies, build 
innovative projects, and prepare for coding competitions. Join us to expand your coding prowess 
and be a part of the exciting world of programming. It also hosts one of the biggest Technical 
fest in whole J&K valley named as “EXORDIUM”</p>
              </div>
              <img className='what_img' src={pic1} alt="" />
           </div>
       </div>





    </div>

  )
}

export default About
