import React from 'react'
import EventCard from './EventCard';
import "../Styles/EventCard.css";
import pic1 from "../assets/pic1.jpg";

var date= new Date().getTime();
console.log(date);

function EventCards() {
    const members=[{
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'30-11-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'30-10-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'14-11-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'10-12-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'12-04-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'03-02-2022'
      },
      {
        name:'Angela Yu',
        image:pic1,
        intro:'Lorem ipsum dolor sit ipsum dolor sit',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rem fugiat eligendi hic dolor perspiciatis necessitatibus corporis laborum, officiis doloremque facere corrupti suscipit quia, cumque debitis blanditiis labore libero tempore?',
        date:'04-06-2022'
      },
    ]
    return (
        <div>
        <div className='containerrr'>
            <div className="testimonials__heading">
               <h1 >Upcoming Events</h1>
            </div>
            <div className="testimonials__section">
               {members.map((element,index)=>{
                  let newdate=element.date.substring(3,5)+"-"+element.date.substring(0,2)+"-"+element.date.substring(6,10);
                  console.log(newdate);
                  let date2= new Date(newdate).getTime();
                  console.log(date2);
                  let select=(date<date2);
                  console.log(select);
                  if(select){
                    return (
                    <EventCard item={element} key={index} category="upcoming"/>
                  )
                  }
               })}
           </div>
        </div>

        <div className='containerrr2'>
            <div className="testimonials__heading">
               <h1 >Past Events</h1>
            </div>
            <div className="testimonials__section">
               {members.map((element,index)=>{
                  let newdate=element.date.substring(3,5)+"-"+element.date.substring(0,2)+"-"+element.date.substring(6,10);
                  console.log(newdate);
                  let date2= new Date(newdate).getTime();
                  console.log(date2);
                  let select=(date>date2);
                  console.log(select);
                  if(select){
                    return (
                    <EventCard item={element} key={index} category="upcoming"/>
                  )
                  }
               })}
           </div>
        </div>
    </div>
      )
}

export default EventCards;
