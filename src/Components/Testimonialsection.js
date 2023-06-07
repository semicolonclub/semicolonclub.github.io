import React from 'react'
import Testimonials from './Testimonials';
import "../Styles/Testimonialsection.css";
import pic1 from "../assets/aliya.png";
import pic2 from "../assets/zoya.png";
import pic3 from "../assets/sachin.png"

function Testimonialsection() {
    const members=[{
        name:'ALIYA SHAIKH',
        image:pic1,
        intro:'Managing Director(2021-2022)',
        description:'I’ve been a part of semicolon pretty much since the 1st Sem of college. From a scared 1st year student with no clue what the future holds so far away from home to the President of this club in my 4th year, the journey has been very interesting. Semicolon holds a big part in shaping my life in and out of college. Being a part of this club taught me to value teamwork, be persistent towards your goal and to always believe that the best is yet to come. The club not only helped me in cultivating my skills and being placed but also gave me some life-long friends. I miss my college days and most of all Semicolon. Nevertheless I am always thrilled to see my juniors take the club’s bar higher each year!Semicolon has always been a hub of bright minds, and I hope it would always continue to be so.'
      },
      {
        name:'SACHIN KUMAR',
        image:pic3,
        intro:'Associate Lead (Technical Team) (2021-2022)',
        description:'My branch was MME but i had keen interest in computer programming.Joining semicolon really helped me in getting those crucial support from the senior members of the club. As a newbie getting started was very tough, so they helped a lot in being consistent. Later on as an associate technical lead, got the opportunity to lead as well. It was time to deliver the same and i tried my best. Usually students were face problems in being consistent while coding and project related issues.'
      },
      {
        name:'ZOYA ARIEF',
        image:pic2,
        intro:'Creative Team Lead (2021-2022)',
        description:'I had the opportunity to serve as a team leader in Semicolon. I found the experience both challenging and rewarding as we had to balance our goals as well as the needs of our team.This experience had given me the opportunity to develop my leadership skills and I am grateful for this amazing experience.'
      },
    ]
  return (
    <div className='testimonials__container'>
        <div className="testimonials__heading">
           <h1 >Testimonials</h1>
        </div>
        <div className="testimonials__section">
           {members.map((element,index)=>{
              return (
                <Testimonials item={element} key={index}/>
              )
           })}
       </div>
    </div>
  )
}

export default Testimonialsection;
