import React, { useState, useEffect } from 'react';
import './FourthRowIcons.css'
import iconOne from '../../../front-end-dev-test-assets/home-expertise.svg'
import iconTwo from '../../../front-end-dev-test-assets/home-hygiene.svg'
import iconThree from '../../../front-end-dev-test-assets/home-lab.svg'
import iconFour from '../../../front-end-dev-test-assets/home-retention.svg'


const FourthRowIcons = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="iconWrapper"> 
         <div><img className="fourthIcon" id="iconOne" src={iconOne}></img></div>
         <div><img className="fourthIcon" id='iconTwo' src={iconTwo}></img></div>
         <div><img className="fourthIcon" id='iconThree' src={iconThree}></img></div>
         <div><img className="fourthIcon" id='iconFour' src={iconFour}></img></div>
      </div>
   )}

export default FourthRowIcons;