import React from "react";
import "../Styles/Resources.css";

import pic1 from "../assets/resource_images/artificial inteligence.jpg";
import pic2 from "../assets/resource_images/machine.jpg";
import pic3 from "../assets/resource_images/html-css-javascript.jpg";
import pic4 from "../assets/resource_images/git-commands.png";
function Resources() {
  return (
    <div>
      <div class="header">
        <h1>Resources</h1>

        <p>Unlock the world of free knowledge and empower yourself with access to learning, tools, and more - all for free.</p>
      </div>

      <div class="row1-container">
        <a href="https://www.coursera.org/learn/ai-for-everyone" class="box box-down cyan">
          <div>
            <h2>Artificial Intelligence (AI)</h2>
            <p>Free certification course</p>
            <img
              className="img_resources"
              src={pic1}
              alt="image not found"
            />
          </div>
        </a>
        <a href="https://www.coursera.org/learn/machine-learning" class="box red">
          <div>
            <h2>Machine Learning</h2>
            <p>Free certification course</p>
            <img
              className="img_resources"
              src={pic2}
              alt=""
            />
          </div>
        </a>

        <a href="https://www.coursera.org/learn/html-css-javascript-for-web-developers" class="box box-down blue">
          <div>
            <h2>html css javascript for web Developers</h2>
            <p>Free certification course</p>
            <img
              className="img_resources"
              src={pic3}
              alt=""
            />
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" class="box orange">
          <div>
            <h2>Git and github</h2>
            <p> Tutorial video </p>
            <img
              className="img_resources"
              src={pic4}
              alt=""
            />
          </div>
        </a>
      </div>

      
    </div>
  );
}

export default Resources;
