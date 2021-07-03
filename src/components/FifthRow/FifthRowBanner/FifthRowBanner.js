import React, { useState, useEffect } from 'react';
import './FifthRowBanner.css'
import Button from '../../Button/Button'
import logo from "../../../front-end-dev-test-assets/banner-2.jpg"
const FifthRowBanner = (props) => {
  

  useEffect(() => {
  
  },[])

  
  return (
         <div id='fifthRowBannerWrapper'> 
         <div id='fifthBannerSquare'> 
         <p id="fifthRowLorem">Lorem Ipsum</p>
         <div id="fifthRowBannerButtonContainer">
         <Button colorScheme={"orangeButton"} buttonText={"BUTTON BUTTON"}/>
         </div>
         </div>
         <img id="fifthRowBannerImg" src={logo} />
      </div>

   )}

export default FifthRowBanner;