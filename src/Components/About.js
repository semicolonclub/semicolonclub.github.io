import React,{ useEffect } from 'react';
import pic1 from "../assets/pic2.jpg";
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
              <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!</p>
              </div>
           </div>
           <div className='flex1' data-aos="flip-down" data-aos-easing="linear" data-aos-duration="1500">
              <div>
              <div className='heading'>
            <h1>What we do?</h1>
           </div>
              <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae iste itaque eaque laboriosam animi perferendis ipsam incidunt cupiditate nostrum suscipit hic, cum consectetur iusto alias unde repellat voluptates enim!</p>
              </div>
              <img className='what_img' src={pic1} alt="" />
           </div>
       </div>





    </div>

  )
}

export default About
