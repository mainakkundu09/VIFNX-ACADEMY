import React from 'react'
import { useState } from 'react';
import './Testimonials.css'

import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

export const Testimonials = () => {
        
    // Using use state hook of the react
         const [selected, setSelected] = useState(0);
         const tLength = testimonialsData.length;
  return (
<div className="Testimonials">
    <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>Here's</span>
            <span>what our current clients have to say about 
            our personalized 1:1 Guidance Under Personal Trainers , Programs and Diet Plans...
         </span>
         <span>
            {testimonialsData[selected].review}
         </span>
         <span>
              <span style={{color: 'var(--orange)'} }>
                  {testimonialsData[selected].name}
              </span>
             - {testimonialsData[selected].status}
         </span>
    </div>
      < div className="right-t">
              <div></div>
              <div></div>
             <img src={testimonialsData[selected].image} alt="" />

             <div className="arrows">
                  <img 
                  onClick={()=>{
                    selected == 0
                    ? setSelected(tLength-1)
                    : setSelected((prev) => prev - 1);
                  }}
                  src={leftArrow} alt="" />
                 
                 
                  <img
                   onClick={()=>{
                    selected ===tLength -1 
                    ? setSelected(0) 
                    : setSelected((prev) => prev + 1);
                  }}
                  src={rightArrow} alt="" />
             </div>
        </div>
</div>

  );
};

export default Testimonials;
