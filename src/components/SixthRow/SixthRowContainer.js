import React, { useState, useEffect } from 'react';
import './SixthRowContainer.css'
import SixthRowLorem from './SixthRowLorem/SixthRowLorem';
import SixthRowCarousel from './SixthRowCarousel/SixthRowCarousel'

const SixthRowContainer = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
   <div id="sixthRowWrapper"> 
   <div id='sixthLoremContainer'>
   <SixthRowLorem />
   </div>
   <div id="sixthRowCarouselContainer">
   <SixthRowCarousel />
   </div>
</div>
   )}

export default SixthRowContainer;