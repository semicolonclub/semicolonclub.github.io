import React from "react";
import "../Styles/Testimonials.css";
import { useState } from "react";

function Testimonials({ item }) {
  const [click, setClick] = useState(false);

  return (
      <div className="event__container">
        <div className="event__card">
          <div className="member__details">
            <img
              className="event__card--image"
              src={item.image}
              alt="testimonial pic"
            />
           <div>
             <h2 className="event__card--name">{item.name}</h2>
             <p className="event__card__detail--time">{item.intro}</p>
           </div>
          </div>
          <div className="event__card__detail">
            <i
              className={click ? "fa fa-angle-up" : "fa fa-angle-down"}
              onClick={() => setClick(!click)}
            ></i>
            <p className={click? "track-list two expand":"track-list two"}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
  );
}

export default Testimonials;
