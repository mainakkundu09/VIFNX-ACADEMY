import React from 'react'
import Header from './Header/Header'
import Heart  from './Header/Img/heart.png'
import hero_image from './Header/Img/orangeboy.png'
import hero_image_back from './Header/Img/Mainak.png'
import my_curves from './Header/Img/hero_image_back.png'

import './Hero.css'

import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => 
 {
       const transition = {type: 'spring', duration : 3};
       const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero"  id="home">

      <div className="blur hero-blur"></div>
        <div className="left-h">

          <Header/>
{/* the best ad */}
          <div className="the-best-ad">
            {/* <div></div> */}
            {/* Framer Motion ANIMATION */}
            <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition={transition}
            ></motion.div>
            <span>Unleash Natural Fitness Virtually</span>
          </div>

          {/* Hero Heading */}
          <div className="hero-text">
               <div>
                 <span className='stroke-text'>Maximize </span>
                 <span>Your</span>
               </div>
               
               <div>
                <span>Fitness</span>
               </div>
                
                <div>
                  <span>
                  Here, we will help you sculpt your ideal self 
                  and embrace the fullness of living
                  </span>
                </div>

          </div>

          {/* figures */}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={2} start={0} delay='1' preFix="+"/>
              </span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>
              <NumberCounter end={12} start={0} delay='2' preFix="+"/>
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
              <NumberCounter end={4} start={0} delay='2' preFix="+"/>
              </span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* hero buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Be In Shape</buttons>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>

          <motion.div
            initial={{rigth: "-1rem" }}
            whileInView={{rigth: "5rem" }}
            transition={transition}
            className="heart-rate" >
          {/* <div className="heart-rate"> */}
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>60-100 bpm</span>
          {/* </div> */}
          </motion.div> 
          
          {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <img src={hero_image_back} alt="" className="hero-image-back" />
          <img src={my_curves} alt="" className="hero-image-back-1" />
        </div>
    </div>
  );
};

export default Hero