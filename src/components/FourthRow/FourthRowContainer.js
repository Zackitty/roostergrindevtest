import React, { useState, useEffect } from 'react';
import './FourthRowContainer.css'
import FourthRowLorem from './FourthRowLorem/FourthRowLorem'
import FourthRowIcons from './FourthRowIcons/FourthRowIcons'
const FourthRowContainer = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="fourthRowWrapper"> 
         <div id='fourthLoremWrapper'>
         <FourthRowLorem />
         </div>
         <div id="fourthPicWrapper">
         <FourthRowIcons />
         </div>
      </div>
   )}

export default FourthRowContainer;