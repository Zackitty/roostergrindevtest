import React from 'react';
import './FourthRowContainer.css'
import FourthRowLorem from './FourthRowLorem/FourthRowLorem'
import FourthRowIcons from './FourthRowIcons/FourthRowIcons'
const FourthRowContainer = (props) => {
  
  
  return (
      <div id="fourth-row-container"> 
         <div id='fourth-lorem-wrapper'>
            <FourthRowLorem />
         </div>
         <div id="fourth-pic-wrapper">
            <FourthRowIcons />
         </div>
      </div>
   )}

export default FourthRowContainer;