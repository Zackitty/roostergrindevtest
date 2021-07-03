import React, { useState, useEffect } from 'react';
import './ThirdRowBanner.css'
import Button from '../../Button/Button'
import img from '../../../front-end-dev-test-assets/banner-1.jpg'
const ThirdRowBanner = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div id='thirdRowBannerWrapper'> 
         <div id='thirdBannerSquare'> 
         <p id="thirdRowLorem">Lorem Ipsum</p>
         <div id="thirdRowBannerButtonContainer">
         <Button colorScheme={"orangeButton"} buttonText={"BUTTON BUTTON"}/>
         </div>
         </div>
         <img id="thirdRowBannerImg" src={img} />
      </div>
   )}

export default ThirdRowBanner;