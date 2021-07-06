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
         <div id='fithRowTitleContainer'>
         <p id="fifthRowLoremTitle">Lorem Ipsum</p>
         </div>
         <div id='fithRowParagraphContainer'>
         <p id="fifthRowLoremParagraph">Lorem ipsum dolor sit amet, et felis integer.
         Cras ac, duis nisl magna est sociis, neque in 
         odio vel, sit lobortis erat. Fugit quam, ut pede
         ut ant, in viverra eros dictum nisl ligula.
         </p>
         </div>
         <div id="fifthRowBannerButtonContainer">
         <Button colorScheme={"orangeButton"} buttonText={"BUTTON BUTTON"}/>
         </div>
         </div>
         <img id="fifthRowBannerImg" src={logo} />
      </div>

   )}

export default FifthRowBanner;