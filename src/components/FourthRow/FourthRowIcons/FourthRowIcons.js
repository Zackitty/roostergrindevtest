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
         <div id="secondIconWrapper">
         <div id="iconOne"><img className="fourthIcon"  src={iconOne}></img></div>
         <div id='iconTwo'><img className="fourthIcon"  src={iconTwo}></img></div>
         <div id='iconThree'><img className="fourthIcon"  src={iconThree}></img></div>
         <div id='iconFour'><img className="fourthIcon"  src={iconFour}></img></div>
         </div>
      </div>
   )}

export default FourthRowIcons;