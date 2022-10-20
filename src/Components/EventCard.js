import React,{ useState } from 'react';
import "../Styles/EventCard.css";


function EventCard({ item,category }) {
  return (
     <section className='event__container'>
         <div class="event__card">
          <img class='event__card__image' 
           src={item.image} alt="this is a image" />
          <div className='event__card__detail--container'>
          <div class="event__card__detail"> 
            <p>{item.name}</p>  
            <p class="event__card__detail--time">{item.date}</p>
          </div>
          <div>
            <p className='intro__event'>{item.intro}</p>
          </div>
          </div>
        </div>
     </section>
  );
}

export default EventCard;
