import React from 'react';
import './Button.css'

const Button = ({clickHandler, colorScheme, buttonText}) => {
  return (
      <div className={'rooster-grin-button'} id={colorScheme} onClick={clickHandler}> 
         <p id="inner-button-text">{buttonText}</p>
      </div>
   )}

export default Button;