import React from 'react';
import './FourthRowIcons.css'
import iconOne from '../../../front-end-dev-test-assets/home-expertise.svg'
import iconTwo from '../../../front-end-dev-test-assets/home-hygiene.svg'
import iconThree from '../../../front-end-dev-test-assets/home-lab.svg'
import iconFour from '../../../front-end-dev-test-assets/home-retention.svg'


const FourthRowIcons = (props) => { 
  return (
      <div id="icon-outer-container"> 
         <div id="icon-inner-container">
            <div id="icon-one">
               <img className="fourth-icon"  src={iconOne}/>
            </div>
            <div id='icon-two'>
               <img className="fourth-icon"  src={iconTwo}/>
            </div>
            <div id='icon-three'>
               <img className="fourth-icon"  src={iconThree}/>
            </div>
            <div id='icon-four'>
               <img className="fourth-icon"  src={iconFour}/>
            </div>
         </div>
      </div>
   )}

export default FourthRowIcons;