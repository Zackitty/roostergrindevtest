import React, { useState, useEffect } from 'react';
import hero from '../../front-end-dev-test-assets/hero.jpg'
import './Button.css'

const Button = ({makeModal1Visible, makeModal1Invisible, colorScheme, buttonText}) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div className={'roosterGrinButton'} id={colorScheme} onClick={makeModal1Visible}> 
         <p id="innerButtonText">{buttonText}</p>
      </div>
   )}

export default Button;