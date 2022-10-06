import React from 'react'
import Testimonials from './Testimonials';
import "../Styles/Testimonialsection.css";
import pic1 from "../assets/pic1.jpg";

function Testimonialsection() {
    const members=[{
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?'
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

export default Testimonialsection
