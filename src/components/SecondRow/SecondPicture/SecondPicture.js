import React, { useState, useEffect } from 'react';
import './SecondPicture.css'
import img from '../../../front-end-dev-test-assets/img-1.jpg'
const SecondPicture = (props) => {
    return (
      <div id='second-row-pic-container'>  
        <img id="second-row-pic" src={img}></img>
      </div>
   )}

export default SecondPicture;