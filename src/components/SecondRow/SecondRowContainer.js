import React, { useState, useEffect } from 'react';
import './SecondRowContainer.css'
import SecondLorem from './SecondLorem/SecondLorem';
import SecondPicture from './SecondPicture/SecondPicture'
const SecondRowContainer = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id="secondRowContainer"> 
         <div id='secondLoremWrapper'>
         <SecondLorem />
         </div>
         <div id="secondPicWrapper">
         <SecondPicture />
         </div>
      </div>
   )}

export default SecondRowContainer;