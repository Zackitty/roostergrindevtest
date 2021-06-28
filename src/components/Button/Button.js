import React, { useState, useEffect } from 'react';
import hero from '../../front-end-dev-test-assets/hero.jpg'
import './Button.css'

const Button = ({makeModal1Visible, makeModal1Invisible, colorScheme, buttonText}) => {
  

  useEffect(() => {
  
  },[])

  
  return (
      <div class={'roosterGrinButton'} id={colorScheme} onClick={makeModal1Visible}> 
         {buttonText}
      </div>
   )}

export default Button;