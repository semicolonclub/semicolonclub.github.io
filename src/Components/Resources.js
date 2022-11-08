import React from 'react';
import '../Styles/Resources.css';

function Resources() {
  return(
          <div>
             <div class="header">
    
    <h1>Resources</h1>

    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
  </div>
  
  <div class="row1-container">
  <a href='' class="box box-down cyan">
    <div >
      <h2>ReactNative</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
      <img className='img_resources' src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>
    </a>
<a href='#' class="box red">
    <div >
      <h2>Machine Learning</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
      <img className='img_resources' src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>
</a>
   
  <a href='#' class="box box-down blue">
    <div >
      <h2>Python</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
      <img className='img_resources' src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
    </a>
 
  </div>
  <div class="row2-container">
    <a href='#' class="box orange">
    <div >
      <h2>Git Commands</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
      <img className='img_resources' src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
    </a>
  </div>
 
          </div>
      )
} 

export default Resources
