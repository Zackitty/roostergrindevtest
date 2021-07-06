import React, { useState, useEffect } from 'react';
import './SixthRowContainer.css'
import SixthRowLorem from './SixthRowLorem/SixthRowLorem';
import SixthRowCarousel from './SixthRowCarousel/SixthRowCarousel'

const SixthRowContainer = (props) => {
  return (
   <div id="sixth-row-container"> 
      <div id='sixth-lorem-wrapper'>
         <SixthRowLorem />
      </div>
      <div id="sixth-row-carousel-wrapper">
         <SixthRowCarousel />
      </div>
   </div>
   )}

export default SixthRowContainer;