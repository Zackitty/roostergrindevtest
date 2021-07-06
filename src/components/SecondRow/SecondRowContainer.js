import React, { useState, useEffect } from 'react';
import './SecondRowContainer.css'
import SecondLorem from './SecondLorem/SecondLorem';
import SecondPicture from './SecondPicture/SecondPicture'
const SecondRowContainer = (props) => {
  
   return (
      <div id="second-row-container"> 
         <div id='second-lorem-wrapper'>
            <SecondLorem />
         </div>
         <div id="second-pic-wrapper">
            <SecondPicture />
         </div>
      </div>
   )}

export default SecondRowContainer;